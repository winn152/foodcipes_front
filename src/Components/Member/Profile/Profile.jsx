import { IoRibbonOutline, IoRibbon } from "react-icons/io5";

import { FaRegUser } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { BiSolidPencil } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import user from '../../Assets/user.png';
import { Link } from "react-router-dom";
import "./Profile.css";
import React, { useEffect, useState } from "react";
import Navbar from "../Navber/Navbar";
import Axios from "axios";
import { baseUrl } from "../../../baseUrl";
// import Saved from "../Saved/Saved";

function Profile() {
  const [userList, setUserList] = useState([]);
  const [userName, setUserName] = useState("");
  const [userPic, setUserPic] = useState("");
  const [imagePreview, setImagePreview] = useState(false);


  const userID = sessionStorage.getItem("userId");

  useEffect(() => {
    Axios.get(baseUrl + "/api/see/profile/" + userID).then((response) => {
      setUserList(response.data);
      setUserName(response.data[0].name);
      setUserPic(response.data[0].img_pf);
    });
  }, []);

  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = (buttonId) => {
    setClickedButton(buttonId);
  };
  return (
    <div>
      <div className="containerp">
        <div className="containerp1 rounded-2xl">
          <div className="containerp1j">
            <img
              className='w-20 h-20 rounded-full '
              src={userPic ? userPic : user}
              alt="Profile"
            />
            {/* {imagePreview ? (
              <img
                className="object-cover"
                src={userPic}
                alt="Rounded avatar"
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              />
            ) : (
              <img
                className="object-cover"
                src={user}
                alt="Default avatar"
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              />
            )} */}
            <div>
              {/* <h1>{userList[0].name}</h1> */}
              <h1>{userName}</h1>
              {/* <p>@cook_39767986</p> */}
            </div>
          </div>
          <div className="profileicon">
            <Link to="/Edit">
              <BiSolidPencil />
            </Link>
            <Link to="/Setting">
              <IoIosSettings />
            </Link>
          </div>
        </div>
        {/* <Saved /> */}
        {/* <div className="containerp2">
          <button
            type="button"
            className={`flex items-center justify-center text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${clickedButton === 'button1' ? 'clicked' : ''}`}
            onClick={() => handleClick('button1')}
          >
            Saved
          </button>
          <button
            type="button"
            className={`flex items-center justify-center text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${clickedButton === 'button2' ? 'clicked' : ''}`}
            onClick={() => handleClick('button2')}
          >
            Public
          </button>
          <button
            type="button"
            className={`flex items-center justify-center text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${clickedButton === 'button3' ? 'clicked' : ''}`}
            onClick={() => handleClick('button3')}
          >
            Private
          </button>

        </div>
        <div className="containerp3">
          <form className='w-[450px] relative mb-5'>
            <div className="relative">
              <input
                type="search"
                placeholder="Type the menu name"
                className='w-full p-4 bg-white rounded-full no-border'
              />
            </div>
            <button
              className='buttonsearch absolute right-1 top-1/2 -translate-y-1/2 p-4 text-white focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2'
              style={{ backgroundColor: '#FF9F1C', borderColor: '#FF9F1C' }}
            >
              Search
            </button>



          </form>
          <a href="#" class="w-[700px]  flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
            <div class="pc3 flex flex-col justify-between p-4 ">
              <IoRibbon size={24} color="orange"
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  margin: 5,
                }}
              />
              <div className="flex items-center ">
                <img
                  className='w-12 h-12 rounded-full object-cover mr-3'
                  src="https://media.istockphoto.com/id/1963249822/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/young-beautiful-woman-in-headphones-working-with-laptop-inside-office-at-workplace-joyful.jpg?s=612x612&w=0&k=20&c=nRgEt_coG4QOrj4_ftsy7_PKndLIBsAzZTcJ0kczTXU="
                  alt="Profile"
                />
                <h1>Lian</h1>
              </div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div className="flex">
                <div className="flex flex-row w-[100px] justify-between items-center pr-3">
                  <FaRegClock size={20} />
                  <p>30</p>
                  <p>min</p>
                </div>
                <div className="flex flex-row w-[100px] justify-between items-center ">
                  <FaRegUser size={20} />
                  <p>1-2</p>
                  <p>people</p>
                </div>
              </div>

            </div>
            <img
              class="object-cover md:h-auto w-[150px] "
              src="https://media.istockphoto.com/id/1933261583/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%81%E0%B8%A7%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B9%80%E0%B8%97%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B5%E0%B8%99%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%94%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%8A%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%9A%E0%B8%B1%E0%B8%A5%E0%B8%8B%E0%B8%B2%E0%B8%A1%E0%B8%B4%E0%B8%81%E0%B9%83%E0%B8%99%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B9%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%A1%E0%B8%95%E0%B9%8C%E0%B8%A1%E0%B8%B4%E0%B8%8A%E0%B8%A5%E0%B8%B4%E0%B8%99%E0%B8%AA%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87.jpg?s=612x612&w=0&k=20&c=ENBNrE41sw772b8BPWjIE2bm9M4pjn0n92ATmycV3NU="
              alt="Image"
            />
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Profile;
