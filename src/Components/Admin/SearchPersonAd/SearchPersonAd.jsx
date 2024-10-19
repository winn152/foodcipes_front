import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavAd from "../NavAd/NavAd";
import logo from "../../Assets/logoAd.png";
import "./SearchPersonAd.css";
import { baseUrl } from "../../../baseUrl";
import Axios from "axios";

function SearchPersonAd() {
  const [userData, setUserData] = useState([]);
  const [text, setText] = useState("");
  const [clickedButton, setClickedButton] = useState(null);
  const [followersData, setFollowersData] = useState({});
  const userID = sessionStorage.getItem("userId");

  const s_user = () => {
    const data = {
      text: text,
    };
    Axios.get(baseUrl + "/api/search/user", {
      params: data,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setUserData(response.data);
    });
  };

  const ud_search = (e) => {
    setText(e.target.value);
  };
  const handleClick = (buttonId) => {
    setClickedButton(buttonId);
  };
  useEffect(() => {
    setClickedButton("button2");

    const fetchFollowers = async (userId) => {
      try {
        const response = await Axios.get(baseUrl + "/api/see/follow_user/" + userId);
        if (response.data && response.data.length > 0) {
          setFollowersData((prevData) => ({...prevData, [userId]: response.data[0].c_follow,}));
        } else {
          console.warn(`No followers data found for user ID: ${userId}`);
          setFollowersData((prevData) => ({...prevData, [userId]: 0,}));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    userData.forEach((user) => {
      fetchFollowers(user.user_id);
    });
  }, [userData]);

  return (
    <div className="b">
      <NavAd />
      <div className="containers">
        <div className="containers1">
          <a
            href="/HomeAdmin"
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
                onChange={ud_search}
              />
            </div>
            <button
              className="absolute right-1 top-1/2 -translate-y-1/2 p-4 text-white focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              style={{
                backgroundColor: "#FF9F1C",
                borderColor: "#FF9F1C",
                marginTop: "5px",
              }}
              onClick={s_user}
              type="button"
            >
              Search
            </button>
          </form>
        </div>
        <div className="conSearchbutton">
          <Link to="/SearchAd">
            <button
              className={`  ${clickedButton === "button1" ? "clicked" : ""}`}
              onClick={() => handleClick("button1")}
            >
              Post
            </button>
          </Link>
          <Link to="/SearchPersonAd">
            <button
              className={`  ${clickedButton === "button2" ? "clicked" : ""}`}
              onClick={() => handleClick("button2")}
            >
              Person
            </button>
          </Link>
        </div>

        <div className="containerse7">
          <div className="containerp3">
            {userData.map((i) => {
              const path = i.user_id == userID ? '/ProfileAd' : '/FollowAd';
              return(
                // eslint-disable-next-line react/jsx-key
                <Link to={path} state={i.user_id}
                  className="min-w-[700px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="flex flex-col justify-between p-4">
                    <div className="flex items-center">
                      <img
                        className="w-20 h-20 rounded-full object-cover mr-3"
                        src={i.img_pf}
                        alt="Profile"
                      />
                      <div className="">
                        <h1 className="h1person">{i.name}</h1>
                        <div className="fpfc3">
                          <h2>{followersData[i.user_id] !== undefined ? followersData[i.user_id] : ''}</h2>
                          <h3>Followers</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPersonAd;
