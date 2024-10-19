import { FaTrash, FaCamera } from "react-icons/fa6";
import './Edit.css'
import Navbar from '../Navber/Navbar'
import { useState,useEffect } from "react";
import user from '../../Assets/user.png';
import Axios from 'axios'
import { baseUrl } from '../../../baseUrl'
import { useNavigate } from "react-router-dom";

function Edit() {
    const [user_img , setUser_img] = useState();
    const userID = sessionStorage.getItem('userId');
    const [userName, setUserName] = useState("");
    const [userPic, setUserPic] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get(baseUrl+'/api/see/profile/'+userID)
          .then((response) => {
            setUserName(response.data[0].name);
            setUserPic(response.data[0].img_pf);
            setUser_img(response.data[0].img_pf);
        })
      }, [userID]);

    const updatePro = () =>{
        const formData = new FormData();
        formData.append('name',userName);
        formData.append('img_pf',user_img);
        Axios.post(baseUrl+'/api/up/user/'+userID,formData,{
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        }).then(() =>{
            navigate('/Home');
        })
    };

    const cancel_pf = () => {
        navigate("/Saved")
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserPic(reader.result);
            };
            reader.readAsDataURL(file);
            setUser_img(file);
        }
    };

    const handleImageDelete = () => {
        setUserPic('');
        setUser_img('');
    };
    return (
        <div className='b'>
            <Navbar />
            <div className="containerss">
                <div className=" containerss1">

                    <div className="relative imgEdit">
                        <img
                            className="object-cover"
                            src={userPic ? userPic : user}
                            alt="Rounded avatar"
                            style={{ width: '200px', height: '200px', borderRadius: '50%' }}
                        />
                        <div
                            className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black rounded-full"
                            style={{ width: '70px', height: '30px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        >
                            <label htmlFor="fileInput">
                                <FaCamera style={{ cursor: 'pointer' }} />
                            </label>
                            <input
                                id="fileInput"
                                type="file"
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                                accept="image/*"
                            />
                            <p className="mx-2">|</p>
                            <FaTrash onClick={handleImageDelete} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                    <div className="containerss3"><label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="containerss4">
                        <button
                            type="button"
                            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            onClick={updatePro}
                        >
                            Update
                        </button>
                        <button type="button" onClick={cancel_pf} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" style={{ borderRadius: '50px' }}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit