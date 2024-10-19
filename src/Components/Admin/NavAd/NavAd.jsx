import { useState,useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../Assets/logoAd.png';
import { IoNotificationsOutline, IoNotifications } from "react-icons/io5";
import './NavAd.css'
import Axios from "axios";
import { baseUrl } from "../../../baseUrl";
import picmain from "../../Assets/user.png"


function NavAd() {
    const location = useLocation(); // ใช้ useLocation เพื่อเช็คเส้นทางปัจจุบัน
    const [userPic, setUserPic] = useState("");
    const userID = sessionStorage.getItem("userId");

    useEffect(() => {
    
        Axios.get(baseUrl + "/api/see/profile/" + userID).then((response) => {
          setUserPic(response.data[0].img_pf);
        });
      }, [userID]);

    return (
        <nav className=" containernav">
            <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-2 aa ">
                <Link to="/HomeAdmin" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-12" alt="foodcipes Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">foodcipes</span>
                </Link>
                <div className="NavAdright" id="navbar-default">
                    <ul className='NavAd_right'>
                        <li>
                            <Link to="/Report" className="iconnav">
                                {location.pathname === "/Report" ? <IoNotifications /> : <IoNotificationsOutline />}
                            </Link>
                        </li>
                        <li>
                            <Link to='/ProfileAd'>
                                <div className="NavAdProfile">
                                    <img src={userPic ? userPic : picmain} className="h-12" alt="foodcipes Logo" />
                                </div>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavAd