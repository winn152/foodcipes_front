import { useState ,useEffect} from 'react'
import NavAd from '../NavAd/NavAd';
import './SettingAd.css'
import { Link } from 'react-router-dom';
import { BiSolidPencil } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import Axios from 'axios';
import { baseUrl } from '../../../baseUrl'


function SettingAd() {
    const [userList, setUserList] = useState([]);
    const [userName, setUserName] = useState("");
    const [userPic, setUserPic] = useState("");

    const userID = sessionStorage.getItem("userId");

    useEffect(() => {
        Axios.get(baseUrl+'/api/see/profile/' + userID)
            .then((response) => {
                setUserList(response.data);
                setUserName(response.data[0].name);
                setUserPic(response.data[0].img_pf);

            })
    }, []);

    const [clickedButton, setClickedButton] = useState(null);

    const handleClick = (buttonId) => {
        setClickedButton(buttonId);
    };
    const hh = () => {
        sessionStorage.clear();
    }

    return (
        <div className='b'>
            <NavAd />
            <div className="containerp">
                {/* <Profile /> */}
                <div className="containerp1 rounded-2xl">
                    <div className="containerp1j">
                        <img
                            className='w-20 h-20 rounded-full '
                            src={userPic}
                            alt="Profile"
                        />
                        <div>
                            {/* <h1>{userList[0].name}</h1> */}
                            <h1>{userName}</h1>
                            <h2>Status : 2</h2>
                            {/* <p>@cook_39767986</p> */}
                        </div>
                    </div>
                    <div className="profileicon">
                        <Link to="/EditAd"><BiSolidPencil /></Link>
                        <Link to="/SettingAd"><IoIosSettings /></Link>
                    </div>
                </div>
                <div className=" containers2">
                    <h1>Setting</h1>
                    <Link to="/">
                        <button
                            type="button"
                            onClick={hh}
                            className={`flex items-center justify-center text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 }`}
                        // onClick={() => handleClick('button1')}
                        >
                            Logout
                        </button>

                    </Link>


                </div>
            </div>
        </div>
    )
}

export default SettingAd