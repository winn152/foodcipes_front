// import Popup from "./Popup";
import { useEffect, useState } from "react";
import Navbar from "../Navber/Navbar";
import { FaRegUser } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { GoComment } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";
import "./EditPost.css";
import { baseUrl } from "../../../baseUrl";

const EditPost = () => {
  const userID = sessionStorage.getItem("userId");

  const navigate = useNavigate();

  const [seeComm, setSeeComm] = useState([]);
  const [comm, setComm] = useState("");

  const [tl, setTl] = useState(0);
  const [img_link, setImg_link] = useState([]);
  const [video_link, setVideo_link] = useState("");
  const [hashtag,setHashtag] = useState([]);

  const [sumUp, setSumUp] = useState(0);

  const [isSaved, setIsSaved] = useState(false); // สถานะของปุ่ม

  const handleClick = () => {
    setIsSaved(!isSaved); // เปลี่ยนสถานะเมื่อคลิก
  };

  const location = useLocation([]);
  const postID = location.state;

  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    Axios.get(baseUrl + "/api/see/post_detail/" + postID).then((response) => {
      setPostData(response.data[0]);
    });
    Axios.get(baseUrl + "/api/see/profile/" + userID).then((response) => {
      setUserData(response.data[0]);
    });
    Axios.get(baseUrl + "/api/see/comment_post/" + postID).then((response) => {
      setSeeComm(response.data);
    });
    Axios.get(baseUrl + "/api/see/link/" + postID).then((response) => {
      if (response.data[0].type_link == 1) {
        setTl(1);
        setImg_link(response.data);
      } else if (response.data[0].type_link == 2) {
        setTl(2);
        setVideo_link(response.data[0].linkpath);
      }
    });
    Axios.get(baseUrl + "/api/see/hashtag/" + postID).then((response) => {
      setHashtag(response.data)
    })
  }, [postID, sumUp, userID]);

  const de_post = () => {
    Axios.get(baseUrl + '/api/delete/post/' + postID);
    navigate('/Saved');
  }

  const textcom = () => {
    if (comm.trim() != "") {
      const data = {
        post_id: postID,
        user_id: userID,
        text: comm,
      };

      Axios.post(baseUrl + "/api/add/comment", data, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        setComm("");
        setSumUp((index) => index + 1);
      });
    }
  };

  const ud_comment = (e) => {
    setComm(e.target.value);
  };

  const onby = (e) => {
    const d = new Date(e);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    return `วันที่ ${day} เดือน ${month} ปี ${year}`;
  };

  return (
    <div className="b">
      <Navbar />
      <div className="containershowout">
        <div className="containershow">
          <img
            className="imgmainshow"
            src={postData.img_main}
            alt="description"
          />
          <div className="containershow1">
            <h1>{postData.name}</h1>
            {/* <CiHeart className="iconfeelingshow" /> */}
          </div>
          <div className="containershow2">
            <h1>Ingredient</h1>
            <div className="iconshow">
              <div className="time">
                <p>
                  <FaRegClock size={20} />
                </p>
                <p>{postData.time_use}</p>
                <p>min</p>
              </div>
              <div className="people">
                <p>
                  <FaRegUser size={20} />
                </p>
                <p>{postData.for_post}</p>
                <p>people</p>
              </div>
              <div className="hastag">
                {hashtag.map((i) => {
                  return(
                    // eslint-disable-next-line react/jsx-key
                    <p style={{fontSize:"20px", marginTop:"-5px", fontWeight: "bold"}}>
                      {i.name}
                    </p>
                  )
                })}
              </div>
            </div>
            <h2>{postData.ingredient}</h2>
          </div>
          <div className="containershow2">
            <h1>How to do it</h1>
            <h2>{postData.step_post}</h2>
            {tl === 1 ? (
              <div className="imghowto">
                {img_link.map((i) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <img
                      className="imghowto1"
                      src={i.linkpath}
                      alt="description"
                    />
                  );
                })}
              </div>
            ) : (
              <div className="videohowto">
                <iframe
                  className="videohowto1"
                  width="560"
                  height="315"
                  src={video_link}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
          <div className="feeling">
            <div className="iconfeeling">
              <GoComment className="iconfeelingshow" />
              <h1>Comment</h1>
            </div>
            {seeComm.map((i) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="commentuser">
                  <img className="" src={i.img_pf} alt="Profile" />
                  <p>{i.text}</p>
                </div>
              );
            })}
            <div className="pro_comment">
              <img
                className="w-12 h-12 rounded-full object-cover mr-3"
                src={userData.img_pf}
                alt="Profile"
              />
              <input
                type="text"
                className="mar10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Comment..."
                onChange={ud_comment}
                value={comm}
                required
              />
              <button
                type="button"
                className="is w-[40px] h-[40px] flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={textcom}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="posted">
            <h1>Recipe posted by</h1>
            <Link to="/Saved" className="pronamedate">
              <img
                className="w-20 h-20 rounded-full object-cover mr-3"
                src={postData.img_pf}
                alt="Profile"
              />
              <h2>{postData.username}</h2>
              <h3>On {onby(postData.date_post)}</h3>
            </Link>
          </div>
        </div>
        <div className="containershowout2">
          <Link to="/EditDetailsPost" state={postID}>
            <button
              type="button"
              className="EditPost-btnn" // เพิ่มคลาสเมื่อปุ่มถูกกด
              onClick={handleClick}
            >
              Edit
            </button>
          </Link>

          <button type="button" className="EditPost-btnn" onClick={de_post}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
