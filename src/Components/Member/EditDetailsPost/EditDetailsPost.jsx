import { HiPhoto, HiVideoCamera } from "react-icons/hi2";
import { useState, useEffect, useRef } from "react";
import Navbar from "../Navber/Navbar";
import "./EditDetailsPost.css";
import { useLocation, useNavigate } from "react-router-dom";
import { MdAddAPhoto } from "react-icons/md";
import Axios from "axios";
import { baseUrl } from "../../../baseUrl";
import { IoReload } from "react-icons/io5";

function EditDetailsPost() {
  const navigate = useNavigate();
    const [hashtags , setHashtags] = useState([]);
    const testHash = useRef(null);
    const [inputValue, setInputValue] = useState("");
    const [filteredHashtags, setFilteredHashtags] = useState([]);
  
    // ฟังก์ชันเมื่อมีการเปลี่ยนแปลงในช่อง input
    const handleChange = (e) => {
      const userInput = e.target.value;
      setInputValue(userInput);
  
      // แยกคำออกโดยใช้ space เพื่อดึงคำสุดท้ายที่ผู้ใช้กำลังพิมพ์
      const words = userInput.split(" ");
      const lastWord = words[words.length - 1];
  
      // กรอง Hashtags เฉพาะคำที่เป็น hashtag
      if (lastWord.startsWith("#")) {
        const filtered = hashtags.filter((hashtag) =>
          hashtag.toLowerCase().startsWith(lastWord.toLowerCase())
        );
        setFilteredHashtags(filtered);
      } else {
        setFilteredHashtags([]);
      }
    };
  
    // ฟังก์ชันเมื่อผู้ใช้คลิกเลือก hashtag
    const handleSuggestionClick = (suggestion) => {
      // setHashtags((i) => [...i,suggestion])
      const words = inputValue.split(" ");
      words[words.length - 1] = suggestion; // แทนคำสุดท้ายด้วย hashtag ที่ถูกเลือก
      setInputValue(words.join(" ")); // ต่อคำกลับมาเป็นข้อความเต็ม
      setFilteredHashtags([]); // ล้างการแนะนำ
    };

  const location = useLocation([]);
  const postID = location.state;

  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState("Select Option");

  //changeDatapost
  const [namePost, setNamePost] = useState("");
  const [storyPost, setStoryPost] = useState("");
  const [forPost, setForPost] = useState(0);
  const [timePost, setTimePost] = useState("");
  const [statusPost, setStatusPost] = useState(0);
  const [ingredientPost, setIngredientPost] = useState("");
  const [stepPost, setStepPost] = useState("");
  const [imgPost, setImgPost] = useState();
  //////////////////////////////////////////////////////

  const [clickedButton, setClickedButton] = useState("");
  const [previewImages, setPreviewImages] = useState([]);
  const [previewVideo, setPreviewVideo] = useState(null);
  const fileInputRef = useRef(null);
  //stepLink
  const [link, setLink] = useState([]);
  const [type_link, setType_link] = useState(0);
  //////////////////////////////////////////////////////

  useEffect(() => {
    setPreviewImages([]);
    setPreviewVideo(null)
    Axios.get(baseUrl + "/api/see/post_edit/" + postID).then((response) => {
      setSelectedImage(response.data[0].img_main);
      setImgPost(response.data[0].img_main);
      setNamePost(response.data[0].name);
      setStoryPost(response.data[0].story);
      setForPost(response.data[0].for_post);
      setTimePost(response.data[0].time_use);
      setIngredientPost(response.data[0].ingredient);
      setStepPost(response.data[0].step_post);
      setStatusPost(response.data[0].status_post);
      if (response.data[0].status_post == 1) {
        setSelectedOption("Public");
      } else if (response.data[0].status_post == 2) {
        setSelectedOption("Private");
      }
      try {
        if (response.data[0].type_link == 1) {
          setClickedButton("photo");
          setType_link(1);
          setPreviewImages([]);
          const newPreviewImages = response.data.reduce((acc, curr) => {
            return [...acc, curr.linkpath];
          }, []);

          setPreviewImages(newPreviewImages);
          setLink(newPreviewImages)
        } else if (response.data[0].type_link == 2) {
          setClickedButton("video");
          setType_link(2);
          setPreviewVideo(response.data[0].linkpath);
          setLink(response.data[0].linkpath)
        }
      } catch (e) {
        console.log(e);
      }
    });
    Axios.get(baseUrl + "/api/see/hashtag_auto").then((response) => {
      setHashtags([])
      response.data.forEach(i => {
        setHashtags((index) => [...index,i.name])
      })
    })
    Axios.get(baseUrl + "/api/see/hashtag/" + postID).then((response) => {
      setInputValue("");
      const names = response.data.map((i) => i.name);
      setInputValue(names.join(" "));
  })
  }, [postID]);

  const ud_namepost = (e) => {
    setNamePost(e.target.value);
  };
  const ud_storypost = (e) => {
    setStoryPost(e.target.value);
  };
  const ud_forpost = (e) => {
    setForPost(e.target.value);
  };
  const ud_timepost = (e) => {
    setTimePost(e.target.value);
  };
  const ud_ingrediant = (e) => {
    setIngredientPost(e.target.value);
  };
  const ud_steppost = (e) => {
    setStepPost(e.target.value);
  };
  //////////////////////////////////////////////////////////////////////////////////////////////

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (option == "Private") {
      setStatusPost(2);
    } else if (option == "Public") {
      setStatusPost(1);
    }
    setSelectedOption(option);
    setIsOpen(false);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // สร้าง URL เพื่อแสดงพรีวิว
      setImgPost(file);
    }
  };

  const handleIconClick = () => {
    document.getElementById("fileInput").click(); // เปิด input file เมื่อกดที่ไอคอน
  };
  const addPost = () => {
    const formData = new FormData();
    formData.append("post_id", postID);
    formData.append("name", namePost);
    formData.append("story", storyPost);
    formData.append("for_post", forPost);
    formData.append("time_use", timePost);
    const foundHashtags = inputValue.match(/#[\wก-๙]+/g); // ค้นหาคำที่เริ่มต้นด้วย #
    if (foundHashtags) {
      const uniqueHashtags = [...new Set(foundHashtags)];
      formData.append("hashtag", uniqueHashtags);
    }

    formData.append("status_post", statusPost);
    formData.append("ingredient", ingredientPost);
    formData.append("step_post", stepPost);
    formData.append("img_main",imgPost);

    if (link instanceof FileList) {
      Array.from(link).forEach((file) => {
          formData.append("linkpath", file);
      });
  } else if (Array.isArray(link)) {
      console.log(link);
      Array.from(link).forEach((file) => {
          formData.append("linkpath", file);
      });
  } else if (typeof link === 'string') {
      console.log("File being added:", link);
      formData.append("linkpath", link);
  } else {
      console.log(link);
      console.log("noooooooo!");
  }
    formData.append("type_link", type_link);


    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
  }

    Axios.post(baseUrl + "/api/up/post", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    navigate("/Home");
  };

  const handleClick = (type) => {
    setClickedButton(type);
  };

  const handleFilesChange = (event) => {
    const files = event.target.files;

    if (clickedButton === "photo") {
      if (files.length > 5) {
        alert("You can only upload a maximum of 5 photos.");
        return;
      }
      const imagePreviews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setLink(files);
      setPreviewImages(imagePreviews);
      setType_link(1);
      setPreviewVideo(null);
    } else if (clickedButton === "video") {
      if (files.length > 1) {
        alert("You can only upload 1 video.");
        return;
      }

      const videoFile = files[0];
      const videoElement = document.createElement("video");

      videoElement.src = URL.createObjectURL(videoFile);

      videoElement.onloadedmetadata = () => {
        const videoDuration = videoElement.duration;

        if (videoDuration > 300) {
          // 300 seconds = 5 minutes
          alert("The video must not exceed 5 minutes.");
          return;
        }

        const videoPreview = URL.createObjectURL(videoFile);
        setLink(files);
        setPreviewVideo(videoPreview);
        setType_link(2);
        setPreviewImages([]);
      };
    }
  };

  return (
    <div className="b">
      <Navbar />
      <div className="containeri">
        {selectedImage === null ? (
          <div className="containeri1" onClick={handleIconClick}>
            <MdAddAPhoto className="icon" />
            <h1>Include a picture of the finished food</h1>
          </div>
        ) : (
          <div className="img-main" onClick={handleIconClick}>
            <img src={selectedImage} alt="Selected" />
          </div>
        )}
        <input
          id="fileInput"
          type="file"
          style={{ display: "none" }} // ซ่อน input file
          onChange={handleImageChange}
          accept="image/*"
        />

        <div className="containeri2">
          <input
            type="text"
            onChange={ud_namepost}
            value={namePost}
            className="mar10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Menu name"
            required
          />
          <input
            type="text"
            onChange={ud_storypost}
            value={storyPost}
            className="mar10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Story"
            required
          />

          <div className="for mar10">
            <h1>For</h1>
            <input
              type="text"
              onChange={ud_forpost}
              value={forPost}
              className="mar10 w-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="People"
              required
            />
          </div>

          <div className="for mar10">
            <h1>Time Use</h1>
            <input
              type="text"
              onChange={ud_timepost}
              value={timePost}
              className="mar10 w-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="เช่น 20 น., 1 ชม., 30 น."
              required
            />
          </div>
          <div className="for mar10">
            <h1>Hashtag</h1>
            <div className="hashtag_input">
              <input
                type="text"
                className="mar10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="#"
                value={inputValue}
                onChange={(event) =>handleChange(event)}
                ref={testHash}
                required
              />
              {/* แสดงรายการ hashtags ที่ถูกกรอง */}
              {filteredHashtags.length > 0 && (
                <ul>
                  {filteredHashtags.slice(0, 5).map((hashtag, index) => (
                    <li
                      key={index}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSuggestionClick(hashtag)}
                    >
                      {hashtag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="status for mar10">
            <h1>Status</h1>
            <div className="dropdown-container">
              <button
                onClick={toggleDropdown}
                className="min-w-[200px]  bg-[#2EC4B6] hover:bg-[#28B0A5] flex justify-center text-white focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                {selectedOption}
                <svg
                  className=" w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="dropdown z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <a
                        onClick={() => handleOptionClick("Public")}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Public
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => handleOptionClick("Private")}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Private
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="containeri2">
          <h2>Ingredient</h2>
          <input
            type="text"
            onChange={ud_ingrediant}
            value={ingredientPost}
            className="mar10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="-2 onions, -2 tablespoons vegetable oil"
            required
          />
        </div>

        <div className="containeri2">
          <h2>Step</h2>
          <input
            type="text"
            onChange={ud_steppost}
            value={stepPost}
            className="mar10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="For example, boil water"
            required
          />

          <div className="containeriin2">
            <button
              type="button"
              className={`flex items-center justify-center text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
                clickedButton === "photo" ? "clicked" : ""
              }`}
              onClick={() => handleClick("photo")}
            >
              Photo
            </button>

            <button
              type="button"
              className={`flex items-center justify-center text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
                clickedButton === "video" ? "clicked" : ""
              }`}
              onClick={() => handleClick("video")}
            >
              Video
            </button>
          </div>

          <div className="iicon">
            {
              clickedButton === "photo" ? (
                previewImages.length > 0 ? (
                  <div>
                    <div style={{display:"flex",alignItems:"center",cursor:"pointer",justifyContent : "center" ,textAlign:"center"}} onClick={() => fileInputRef.current.click()}>
                      <IoReload  style={{fontSize:"50px"}}/>
                      <h1 style={{fontSize:"15px"}}>Choos new file</h1>
                    </div>
                    <div className="image-previews">
                    {previewImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`preview-${index}`}
                        className="preview-image"
                      />
                    ))}
                  </div>
                  </div>
                  
                ) : (
                  <div onClick={() => fileInputRef.current.click()}>
                    <HiPhoto />
                  </div>
                )
              ) : previewVideo === null ? (
                <div onClick={() => fileInputRef.current.click()}>
                  <HiVideoCamera />
                </div>
              ) : (
                <div>
                  <div style={{display:"flex",alignItems:"center",cursor:"pointer",justifyContent : "center" ,textAlign:"center"}} onClick={() => fileInputRef.current.click()}>
                      <IoReload  style={{fontSize:"50px"}}/>
                      <h1 style={{fontSize:"15px"}}>Choos new file</h1>
                  </div>
                  <div className="video-preview">
                    <video key={previewVideo} controls>
                      <source src={previewVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )
              // ? <HiPhoto /> &&
              //   previewImages.length > 0 && (
              // <div className="image-previews">
              //   {previewImages.map((image, index) => (
              //     <img
              //       key={index}
              //       src={image}
              //       alt={`preview-${index}`}
              //       className="preview-image"
              //     />
              //   ))}
              // </div>
              //   )
              // : <HiVideoCamera /> &&
              //   previewVideo && (
              // <div className="video-preview">
              //   <video key={previewVideo} controls>
              //     <source src={previewVideo} type="video/mp4" />
              //     Your browser does not support the video tag.
              //   </video>
              // </div>
              //   )
            }
          </div>

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept={clickedButton === "photo" ? "image/*" : "video/*"}
            multiple={clickedButton === "photo"}
            onChange={handleFilesChange}
          />

          {/* <div className="preview-section">
            {clickedButton === "photo" && previewImages.length > 0 && (
              <div className="image-previews">
                {previewImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`preview-${index}`}
                    className="preview-image"
                  />
                ))}
              </div>
            )}

            {clickedButton === "video" && previewVideo && (
              <div className="video-preview">
                <video key={previewVideo} controls>
                  <source src={previewVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div> */}

          {/* <Link to="/Show"
                        className="flex items-center justify-center bg-[#FFA726] text-white hover:bg-[#FB8C00] focus:outline-none focus:ring-4 focus:ring-[#FFB74D] font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#EF6C00] dark:text-white dark:hover:bg-[#E65100] dark:focus:ring-[#FF8A65]">
                        <button onClick={addPost} type="button">Add Post</button>
                    </Link> */}
          <button
            onClick={addPost}
            type="button"
            className="flex items-center justify-center bg-[#FFA726] text-white hover:bg-[#FB8C00] focus:outline-none focus:ring-4 focus:ring-[#FFB74D] font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#EF6C00] dark:text-white dark:hover:bg-[#E65100] dark:focus:ring-[#FF8A65]"
          >
            Update Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditDetailsPost;
