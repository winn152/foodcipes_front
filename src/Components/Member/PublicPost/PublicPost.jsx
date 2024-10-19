import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // ใช้ไอคอนลูกศรจาก react-icons
import { baseUrl } from '../../../baseUrl'
import React from 'react'
import { FaArrowLeft, FaGlobe } from "react-icons/fa"; // นำเข้าไอคอนที่ต้องการ

function PublicPost() {
    const [showPost, setShowPost] = useState([]);

    const left = () => {
        setSum(sum - 4);
      };
      const right = () => {
        setSum(sum + 4);
      };
  return (
     <div className="container2">
          <button
            className="flex items-center justify-center w-12 h-12 text-white bg-[#2EC4B6] rounded-full hover:bg-[#1c8c8e] focus:outline-none focus:ring-4 focus:ring-[#1c8c8e] "
            style={{ marginTop: "130px" }}
            onClick={left}
          >
            <FaArrowLeft size={20} />
          </button>
          {showPost.map((i) => {
            return (
              <Link  >
                <div className="bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 card">
                  <div className="profile">
                    <div className="p-2 a">
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src={i.img_pf}
                        alt="Profile"
                      />
                      <p >{i.username}</p>
                    </div>

                  </div>

                  <div className="relative">
                    <Link to="/Details" state={i.post_id}>
                      <img
                        className="fixed-size-image "
                        src={i.img_main}
                        alt="Sample"
                      />
                    </Link>
                    <div className="absolute bottom-2 right-2 moblie-menu" onClick={handleClick1}>
                      {" "}
                      {click ? (
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
                      onClick={handleClick2}
                    >
                      {click2 ? (
                        <FaHeart className="FaHeart" />
                      ) : (
                        <FaHeartCirclePlus />
                      )}
                      {i.sumlike > 0 && i.sumlike}
                    </a>
                  </div>
                </div>
              </Link>
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
  )
}

export default PublicPost