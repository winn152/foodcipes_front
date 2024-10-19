import { useState } from 'react';
import { AiOutlineEllipsis } from "react-icons/ai";
import '../../Member/Details/Popup.css'
import { useLocation,useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { baseUrl } from '../../../baseUrl';

const PopupReport = ({ message, onClose }) => {
    const userID = sessionStorage.getItem('userId');
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Topics");
    const [topic, setTopic] = useState(0);

    const location = useLocation([]);
    const postID = location.state;

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toreport = () =>{
        const formData = new FormData();
        formData.append('user_id',userID);
        formData.append('post_id',postID);
        formData.append('type_report',topic);

        const data = {
            user_id: userID,
            post_id: postID,
            type_report: topic
        }

        Axios.post(baseUrl + "/api/add/report",data, {
            headers: {
                "Content-Type": "application/json",
              },
        });
        sessionStorage.setItem("reload",1)
        navigate('/Home')
    }

    const handleOptionClick = (option) => {
        setSelectedOption(option); // เปลี่ยนข้อความในปุ่มเมื่อเลือกตัวเลือก
        if (option == "เนื้อหาสุ่มเสี่ยงหรือไม่เหมาะสม") {
            setTopic(1);
            console.log(1);
        }
        else if(option == "มีเนื้อหาที่เป็นอันตรายหรือสุขภาพไม่ดี"){
            setTopic(2);
            console.log(2);
        }
        else if(option == "มีโฆษณาแฝงหรือสแปม"){
            setTopic(3);
            console.log(3);
        }
        else if(option == "รูปภาพหรือวิดีโอที่ไม่เหมาะสม"){
            setTopic(4);
            console.log(4);
        }
        setIsOpen(false);
    };

    return (
        <div className="overlay">
            <div className="popup">
                <h2>Reporting topics</h2>
                <div className="dropdown-container">
                    <button onClick={toggleDropdown} className="min-w-[250px] flex justify-center text-white  bg-red-700  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {selectedOption}
                        <svg className=" w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="dropdown z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                <li>
                                    <a onClick={() => handleOptionClick("เนื้อหาสุ่มเสี่ยงหรือไม่เหมาะสม")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">เนื้อหาสุ่มเสี่ยงหรือไม่เหมาะสม</a>
                                </li>
                                <li>
                                    <a onClick={() => handleOptionClick("มีเนื้อหาที่เป็นอันตรายหรือสุขภาพไม่ดี")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">มีเนื้อหาที่เป็นอันตรายหรือสุขภาพไม่ดี</a>
                                </li>
                                <li>
                                    <a onClick={() => handleOptionClick("มีโฆษณาแฝงหรือสแปม")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">มีโฆษณาแฝงหรือสแปม</a>
                                </li>
                                <li>
                                    <a onClick={() => handleOptionClick("รูปภาพหรือวิดีโอที่ไม่เหมาะสม")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">รูปภาพหรือวิดีโอที่ไม่เหมาะสม</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="buttonReport">
                    <button className='banner-btn' onClick={onClose}>Close</button>
                    <button className='banner-btn' onClick={toreport}>Submit</button>
                </div>


            </div>
        </div>
    );
};

export default PopupReport;
