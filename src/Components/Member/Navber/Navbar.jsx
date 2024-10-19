import { FaRegCircleUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import logo from '../../Assets/logo.jpg';
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import { IoNotificationsOutline, IoNotifications } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const location = useLocation(); // ใช้ useLocation เพื่อเช็คเส้นทางปัจจุบัน

    return (
        <nav className="containernav">
            <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-2 aa">
                <Link to="/Home" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-12" alt="foodcipes Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">foodcipes</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden  md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/Home" className="iconnav" aria-current="page">
                                {location.pathname === "/Home"|| location.pathname === "/FollowingPost" ? <GoHomeFill /> : <GoHome />}
                            </Link>
                        </li>
                        <li>
                            <Link to="/Search" className="iconnav">
                                {location.pathname === "/Search"|| location.pathname === "/SearchPerson" ? <RiSearchFill /> : <RiSearchLine />}
                            </Link>
                        </li>
                        <li>
                            <Link to="/Notifications" className="iconnav">
                                {location.pathname === "/Notifications" ? <IoNotifications /> : <IoNotificationsOutline />}
                            </Link>
                        </li>
                        <li>
                            <Link to="/Saved" className="iconnav">
                                {location.pathname === "/Saved" || location.pathname === "/Public" || location.pathname === "/Private"
                                    ? <FaUserCircle />
                                    : <FaRegCircleUser />}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
