import { IoPersonAdd } from "react-icons/io5";
import { FaArrowLeft, FaGlobe } from "react-icons/fa"; // นำเข้าไอคอนที่ต้องการ
import { FaHeartCirclePlus, FaHeart } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai"; // ใช้ไอคอนบวกจาก react-icons
import { FaArrowRight } from "react-icons/fa"; // ใช้ไอคอนลูกศรจาก react-icons
import { IoRibbonOutline, IoRibbon } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FollowingPost.css";
import Navbar from "../Navber/Navbar";
import logo from "../../Assets/logo.jpg";
import Axios from "axios";
import { baseUrl } from "../../../baseUrl";
import picmain from "../../Assets/picmain.png"

function FollowingPost() {
  const userID = sessionStorage.getItem("userId");
  const [likeClick, setLikeClick] = useState([]);
  const [saveClick, setSavePost] = useState([]);

  const [sumUp, setSumUp] = useState(0);

  const checkLike = (postId) => {
    return likeClick.includes(postId);
  };

  const checkSavePost = (postId) => {
    return saveClick.includes(postId);
  };

  const handleClick1 = (postId) => {
    if (checkSavePost(postId)) {
      const data = {
        user_id: userID,
        post_id: postId,
      };
      Axios.post(baseUrl + "/api/delete/savedpost", data, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        setSumUp((index) => index - 1);
      });
    } else {
      const data = {
        user_id: userID,
        post_id: postId,
      };
      Axios.post(baseUrl + "/api/add/savedpost", data, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        setSumUp((index) => index + 1);
      });
    }
  };

  const handleClick2 = (postId) => {
    if (checkLike(postId)) {
      const data = {
        user_id: userID,
        post_id: postId,
      };
      Axios.post(baseUrl + "/api/delete/like", data, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        setSumUp((index) => index - 1);
      });
    } else {
      const data = {
        user_id: userID,
        post_id: postId,
      };
      Axios.post(baseUrl + "/api/add/like", data, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        setSumUp((index) => index + 1);
      });
    }
  };

  const [clickedButton, setClickedButton] = useState("button2");
  const handleClick = (buttonName) => {
    setClickedButton(buttonName);
  };

  const [sum, setSum] = useState(0);

  const [postData, setPostData] = useState([]);

  const [showPost, setShowPost] = useState([]);

  const right = () => {
    setSum(sum + 4);
  };

  const left = () => {
    setSum(sum - 4);
  };

  useEffect(() => {
    Axios.get(baseUrl + "/api/see/post_following/" + userID).then(
      (response) => {
        setPostData(response.data);
      }
    );
    Axios.get(baseUrl + "/api/see/like_user/" + userID).then((response) => {
      const postIds = response.data.map((item) => item.post_id);
      setLikeClick(postIds);
    });
    Axios.get(baseUrl + "/api/see/savedpost/" + userID).then((response) => {
      const postIds = response.data.map((item) => item.post_id);
      setSavePost(postIds);
    });
  }, [sumUp, userID]);

  useEffect(() => {
    setShowPost([]);
    postData.map((item, index) => {
      if (sum + 3 >= postData.length) {
        setSum(postData.length - 4);
      }
      if (sum < 0) {
        setSum(0);
      }

      if (index >= sum && index <= sum + 3) {
        setShowPost((noy) => [...noy, item]);
      }
    });
  }, [postData, sum]);

  return (
    <div className="relative_10 b">
      <Navbar />
      <div className="containerh">
        <div className="container1">
          <a
            href="/Home"
            className="flex items-center space-x-8 rtl:space-x-reverse"
          >
            <img src={logo} className="h-20" alt="foodcipes Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              foodcipes
            </span>
          </a>
          <div className=""></div>

          <form className="w-[450px] relative">
            <div className="relative">
              <input
                type="search"
                placeholder="Type the menu name"
                className="w-full p-4 bg-white rounded-full no-border"
              />
            </div>
            <button
              className="absolute right-1 top-1/2 -translate-y-1/2 p-4 text-white focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              style={{
                backgroundColor: "#2EC4B6",
                borderColor: "#2EC4B6",
                marginTop: "5px",
              }}
            >
              Search
            </button>
          </form>
          <div className="post">
            <Link to="/Home">
              <button
                type="button"
                className={`flex items-center justify-center text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
                  clickedButton === "button1" ? "clicked" : ""
                }`}
                onClick={() => handleClick("button1")}
              >
                <FaGlobe className="mr-2" />
                Public Post
              </button>
            </Link>
            <Link to="/FollowingPost">
              <button
                type="button"
                className={`flex items-center justify-center text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
                  clickedButton === "button2" ? "clicked" : ""
                }`}
                onClick={() => handleClick("button2")}
              >
                <IoPersonAdd className="mr-2" />
                Following Post
              </button>
            </Link>
          </div>
          <h1>All</h1>
        </div>

        <div
          className=" container2"
          style={{ display: showPost.length > 0 ? "flex" : "none" }}
        >
          <button
            className="flex items-center justify-center w-12 h-12 text-white bg-[#2EC4B6] rounded-full hover:bg-[#1c8c8e] focus:outline-none focus:ring-4 focus:ring-[#1c8c8e] "
            style={{ marginTop: "130px" }}
            onClick={left}
          >
            <FaArrowLeft size={20} />
          </button>
          {showPost.map((i) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div>
                <div className="bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 card">
                  <Link to="/Follow" state={i.user_id} className="profile">
                    <div className="p-2 a">
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src={i.img_pf}
                        alt="Profile"
                      />
                      <p>{i.username}</p>
                    </div>
                  </Link>

                  <div className="relative">
                    <Link to="/Details" state={i.post_id}>
                      <img
                        className="fixed-size-image "
                        src={i.img_main ? i.img_main : picmain}
                        alt="Sample"
                      />
                    </Link>
                    <div
                      className="absolute bottom-2 right-2 moblie-menu"
                      onClick={() => handleClick1(i.post_id)}
                    >
                      {" "}
                      {checkSavePost(i.post_id) ? (
                        <IoRibbon />
                      ) : (
                        <IoRibbonOutline />
                      )}
                    </div>
                  </div>

                  <div className="p-2">
                    <a href="#">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {i.name}
                      </h5>
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center px-1 py-1 text-2xl font-medium text-black-600 bg-gray-300 rounded-2xl hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-500"
                      onClick={() => handleClick2(i.post_id)}
                    >
                      {checkLike(i.post_id) ? (
                        <FaHeart className="FaHeart" />
                      ) : (
                        <FaHeartCirclePlus />
                      )}
                      {i.sumlike > 0 && i.sumlike}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            className="flex items-center justify-center w-12 h-12 text-white bg-[#2EC4B6] rounded-full hover:bg-[#1c8c8e] focus:outline-none focus:ring-4 focus:ring-[#1c8c8e] "
            style={{ marginTop: "130px" }}
            onClick={right}
          >
            <FaArrowRight size={20} />
          </button>
        </div>


      </div>
      <Link to="/InsertPost">
          <button className="button_insert">
            <AiOutlinePlus size={20} />
          </button>
        </Link>
    </div>
  );
}

export default FollowingPost;
