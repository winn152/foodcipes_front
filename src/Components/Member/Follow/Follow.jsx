import "./Follow.css";
import Navbar from "../Navber/Navbar";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../baseUrl";

function Follow() {
  const userID = sessionStorage.getItem("userId");
  const [postData, setPostData] = useState([]);
  const [username, setusername] = useState("");
  const [userpic, setuserpic] = useState("");
  const [fuser, setFuser] = useState("");

  const [follow,setFollow] = useState(0);
  const [following,setFollowing] = useState(0);

  const [sumUp, setSumUp] = useState(0);

  const [followClick, setIsFollowClick] = useState([]);

  const location = useLocation([]);
  const user_id = location.state;

  useEffect(() => {
    Axios.get(baseUrl + "/api/see/member_profile/" + user_id).then(
      (response) => {
        if (response.data == '') {
          Axios.get(baseUrl + "/api/see/profile/" + user_id).then((response)=>{
            setusername(response.data[0].name);
            setuserpic(response.data[0].img_pf);
            setFuser(response.data[0].user_id);
        })
        } else {
          setusername(response.data[0].username);
          setuserpic(response.data[0].img_pf);
          setFuser(response.data[0].user_id);
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
      <Navbar />
      <div className="container-follow">
        <div className="follow-con">
          <div className="cardfollow">
            <div className="followprofile">
              <img
                // className='w-20 h-20  '
                src={userpic}
                alt="Profile"
              />
              <h1>{username}</h1>
            </div>
            <div className="followprofilecon">
              {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quaerat eos aliquid eligendi, aliquam, voluptates, perferendis autem officia mollitia nostrum inventore dolorum quasi odio iusto aut atque reiciendis. Quaerat, ipsum!</p> */}
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
            {postData.map((i) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="followcon2">
                  <Link to="/Details" state={i.post_id}>
                    <img
                      // className='w-20 h-20  '
                      src={i.img_main}
                      alt="Profile"
                    />
                  </Link>

                  <h2>{i.name}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Follow;
