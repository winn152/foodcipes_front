import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavAd from "../NavAd/NavAd";
import logo from "../../Assets/logoAd.png";
import "./SearchAd.css";
import { IoRibbonOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { baseUrl } from "../../../baseUrl";
import Axios from "axios";

function SearchAd() {
  const [postData, setPostData] = useState([]);
  const [text, setText] = useState("");
  const [clickedButton, setClickedButton] = useState(null);
  const [hashtagData, setHashtagData] = useState({});


  const s_post = () => {
    const data = {
      text: text,
    };
    if(text.charAt(0) === '#'){
      Axios.get(baseUrl + "/api/search/hashtag", {
        params: data,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        setPostData(response.data);
      });
    }
    else{
      Axios.get(baseUrl + "/api/search/post", {
        params: data,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        setPostData(response.data);
      });
    }
    
  };

  const ud_search = (e) => {
    setText(e.target.value);
  };
  const handleClick = (buttonId) => {
    setClickedButton(buttonId);
  };
  useEffect(() => {
    setClickedButton("button1");
    const fetchHashtag = async (postID) => {
      try {
        const response2 = await Axios.get(baseUrl + "/api/see/hashtag/" + postID);
        const response = response2.data.map(item => item.name).join(' ');
        setHashtagData((prevData) => ({...prevData, [postID]: response,}));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    postData.forEach((post) => {
      fetchHashtag(post.post_id);
    });
  }, [postData]);

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
              type="button"
              onClick={s_post}
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
            {postData.map((i) => {
              return(
                // eslint-disable-next-line react/jsx-key
                <Link to="/DetailPost" state={i.post_id}
                  className="min-w-[700px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="flex flex-col justify-between p-4">
                    <IoRibbonOutline
                      size={24}
                      color="orange"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        margin: 5,
                      }}
                    />
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full object-cover mr-3"
                        src={i.img_pf}
                        alt="Profile"
                      />
                      <h1>{i.username}</h1>
                    </div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {i.postname}
                    </h5>
                    <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                      {hashtagData[i.post_id] !== undefined ? hashtagData[i.post_id] : ''}
                    </h5>

                    <div className="flex">
                      <div className="flex flex-row w-[100px] justify-between items-center pr-3">
                        <FaRegClock size={20} />
                        <p>{i.time_post}</p>
                        <p>min</p>
                      </div>
                      <div className="flex flex-row w-[100px] justify-between items-center">
                        <FaRegUser size={20} />
                        <p>{i.for_post}</p>
                        <p>people</p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-[170px] object-cover rounded-lg order-last"
                    src={i.img_main}
                    alt="Image"
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchAd;
