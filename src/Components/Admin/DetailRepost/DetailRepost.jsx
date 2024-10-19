import { FaHashtag } from "react-icons/fa6";
import { useEffect, useState } from "react";
import NavAd from "../NavAd/NavAd";
import { FaRegUser } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";
import "./DetailRepost.css";
import { baseUrl } from "../../../baseUrl";
import { FaHeartCirclePlus, FaHeart } from "react-icons/fa6";


const DetailRepost = () => {
  const navigate = useNavigate();
  const [tl, setTl] = useState(0);
  const [img_link, setImg_link] = useState([]);
  const [video_link, setVideo_link] = useState("");

  const [sumUp, setSumUp] = useState(0);
  const [likeClick, setLikeClick] = useState(false);
  const userID = sessionStorage.getItem("userId");
  const [saveClick, setSavePost] = useState(false);

  const handleClick2 = () => {
    if (likeClick == true) {
      const data = {
        user_id: userID,
        post_id: postID,
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
        post_id: postID,
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

  const handleClick = () => {
    if (saveClick == true) {
      const data = {
        user_id: userID,
        post_id: postID,
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
        post_id: postID,
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

  const location = useLocation([]);
  const {postID,reportID} = location.state;
  

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    Axios.get(baseUrl + "/api/see/post_detail/" + postID).then((response) => {
      setPostData(response.data[0]);
      console.log(baseUrl + "/api/see/post_profile/" + postID);
    });
  }, [postID, sumUp]);

  useEffect(() => {
    const userID = sessionStorage.getItem("userId");
    Axios.get(baseUrl + "/api/see/link/" + postID).then((response) => {
      if (response.data[0].type_link == 1) {
        setTl(1);
        setImg_link(response.data);
      } else if (response.data[0].type_link == 2) {
        setTl(2);
        setVideo_link(response.data[0].linkpath);
      }
    });
    Axios.get(baseUrl + "/api/see/like_detail/" + userID + "/" + postID).then(
      (response) => {
        if (response.data[0] != null) {
          setLikeClick(true);
        } else {
          setLikeClick(false);
        }
      }
    );
    Axios.get(
      baseUrl + "/api/see/savedpost_detail/" + userID + "/" + postID
    ).then((response) => {
      if (response.data[0] != null) {
        setSavePost(true);
      } else {
        setSavePost(false);
      }
    });
  }, [postID, sumUp]);

  const onby = (e) => {
    const d = new Date(e);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    return `วันที่ ${day} เดือน ${month} ปี ${year}`;
  };

  const set_public = () => {
    Axios.get(baseUrl+'/api/see/report_public/' + postID);
    navigate('/HomeAdmin');
  }
  const set_ban = () => {
    const data = {
      user_id : userID,
      post_id : postID,
      report_id : reportID
    }
    
    Axios.post(baseUrl+'/api/see/report_ban',data);
    navigate('/HomeAdmin');
  }

  return (
    <div className="b">
      <NavAd />
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
                <FaHashtag />
                <p>ต้มยำ,แกง,ต้ม</p>
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
                  src={video_link} // ใช้ embed URL ของ YouTube
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
          <div className="posted">
            <h1>Recipe posted by</h1>
            <Link
              to="/FollowAd"
              state={postData.user_id}
              className="pronamedate"
            >
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
        <a
            className="inline-flex items-center px-1 py-1 text-2xl font-medium text-black-600 bg-gray-300 rounded-2xl hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-500"
            onClick={handleClick2}
          >
            {likeClick ? (
              <FaHeart className="FaHeart" />
            ) : (
              <FaHeartCirclePlus />
            )}
          </a>
          <button
            type="button"
            className={`report-btn ${saveClick ? "saved" : ""}`} // เพิ่มคลาสเมื่อปุ่มถูกกด
            onClick={handleClick}
          >
            {saveClick ? "Saved" : "Save"}
          </button>
          <button 
            type="button" 
            className="Public-btn"
            onClick={set_public}
          >
            Public
          </button>
          <button 
            type="button" 
            className="detail-btn"
            onClick={set_ban}  
          >
            Ban
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailRepost;
