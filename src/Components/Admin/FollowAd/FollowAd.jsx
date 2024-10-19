import { useState, useEffect } from "react";
import Axios from "axios";
import { FaPencilAlt } from "react-icons/fa";
import "./FollowAd.css";
import NavAd from "../NavAd/NavAd";
import { Link, useLocation } from "react-router-dom";
import { baseUrl } from "../../../baseUrl";

function FollowAd() {
  const [status, setStatus] = useState(1);
  const [postData, setPostData] = useState([]);
  const location = useLocation();
  const user_id = location.state;
  const userID = sessionStorage.getItem("userId");
  const [username, setUsername] = useState("");
  const [userpic, setUserpic] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(status);
  const [sumUp, setSumUp] = useState(0);
  const [fuser, setFuser] = useState("");
  const [followClick, setIsFollowClick] = useState([]);
  const [sumReport, setSumReport] = useState(0);
  const [follow,setFollow] = useState(0);
  const [following,setFollowing] = useState(0);

  const tran_status = (e) =>{
    if (e == 1) {
      return "ปกติ"
    }
    else if(e == 2){
      return "แบน"
    }
  }

  useEffect(() => {
    Axios.get(baseUrl + "/api/see/member_profile/" + user_id).then(
      (response) => {
        if (response.data == '') {
          Axios.get(baseUrl + "/api/see/profile/" + user_id).then((response)=>{
            setUsername(response.data[0].name);
            setUserpic(response.data[0].img_pf);
            setFuser(response.data[0].user_id);
            setSelectedStatus(response.data[0].status_user);
            setStatus(response.data[0].status_user);
            setSumReport(response.data[0].sum_report);
        })
        } else {
          setUsername(response.data[0].username);
          setUserpic(response.data[0].img_pf);
          setFuser(response.data[0].user_id);
          setSelectedStatus(response.data[0].status_user);
          setStatus(response.data[0].status_user);
          setSumReport(response.data[0].sum_report);
          setPostData(response.data);
        }
      }
    );
    Axios.get(baseUrl + "/api/see/follow/" + userID).then((response) => {
      const fuserIds = response.data.map((item) => item.fuser_id);
      setIsFollowClick(fuserIds);
    });
    Axios.get(baseUrl + "/api/see/follow_user/" + user_id).then((response) => {
      if (response.data == '') {
        console.log(0);
      } else {
        setFollow(response.data[0].c_follow)
      }
    });
    Axios.get(baseUrl + "/api/see/following_user/" + user_id).then((response) => {
      if (response.data == '') {
        console.log(0);
      } else {
      setFollowing(response.data[0].c_following)
      }
    });
  }, [sumUp, userID, user_id]);

  const handleStatusChange = (newStatus) => {
    setSelectedStatus(newStatus);
  };

  const confirmStatus = () => {
    Axios.get(baseUrl + '/api/up/status_user/'+user_id+"/"+selectedStatus);
    
    setStatus(selectedStatus);
    setIsPopupOpen(false);
  };

  const cancelStatusChange = () => {
    setSelectedStatus(status); // Reset to original status
    setIsPopupOpen(false);
  };

  const checkFollow = (fuserId) => {
    return followClick.includes(fuserId);
  };

  const handleFollowClick = (fuserId) => {
    if (checkFollow(fuserId)) {
      const data = {
        user_id: userID,
        fuser_id: fuserId,
      };
      Axios.post(baseUrl + "/api/delete/follow", data, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        setSumUp((index) => index - 1);
      });
    } else {
      const data = {
        user_id: userID,
        fuser_id: fuserId,
      };
      Axios.post(baseUrl + "/api/add/follow", data, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        setSumUp((index) => index + 1);
      });
    }
  };

  return (
    <>
      <NavAd />
      <div className="container-follow">
        <div className="follow-con">
          <div className="cardfollow">
            <div className="followprofile">
              <img src={userpic} alt="Profile" />
              <div>
                <h1>{username}</h1>
                <div className="statusUser" style={{width:"135px"}}>
                  <h2>Status: {tran_status(status)}</h2>
                  <FaPencilAlt
                    onClick={() => setIsPopupOpen(true)}
                    style={{ cursor: "pointer",marginRight:"15px" }}
                    
                  />
                </div>
                
                <div style={{marginTop:"10px"}}>
                  <h2>Reported: {sumReport} ครั้ง</h2>
                </div>
              </div>
            </div>
            {isPopupOpen && (
              <div className="modal-overlay">
                <div className="modal-popup">
                  <h2>Select Status</h2>
                  <div className="dropdown-wrapper" style={{width:"100px"}}>
                    <select
                      className="status-dropdown"
                      onChange={(e) => handleStatusChange(e.target.value)}
                      value={selectedStatus}
                    >
                      <option value={1}>ปกติ</option>
                      <option value={2}>แบน</option>
                    </select>
                  </div>
                  <div className="action-buttons">
                    <button className="action-btn" onClick={cancelStatusChange}>
                      Cancel
                    </button>
                    <button className="action-btn" onClick={confirmStatus}>
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="followprofilecon">
              <div className="followprofilecon2">
                <div className="fpfc3">
                  <h2>{following}</h2>
                  <h3>Following</h3>
                </div>
                <div className="fpfc3">
                  <h2>{follow}</h2>
                  <h3>Followers</h3>
                </div>
              </div>
              <div
                className={`follow-btn ${
                  checkFollow(fuser) ? "following" : ""
                }`}
                onClick={() => handleFollowClick(fuser)}
              >
                {checkFollow(fuser) ? "Following" : "Follow"}
              </div>
            </div>
          </div>

          <div className="cardfollow">
            {postData.map((i) => (
              <div className="followcon2" key={i.post_id}>
                <Link to="/DetailPost" state={i.post_id}>
                  <img src={i.img_main} alt="Post" />
                </Link>
                <h2>{i.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FollowAd;
