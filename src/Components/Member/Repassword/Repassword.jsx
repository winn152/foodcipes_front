import "./Repassword.css"
import logo from '../../Assets/logo.jpg';
import { useLocation } from "react-router-dom";
import {  FaLock } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { baseUrl } from "../../../baseUrl";

function Repassword() {

    const location = useLocation();
    const userId = location.state?.userId;
    const textp = useRef();
    const conp = useRef();
    const [text_err,setText_err] = useState("");
    const navigate = useNavigate();


    const getUser = () => {
        if (textp.current.value == conp.current.value){
            Axios.post(baseUrl + '/api/repassword/' + userId,{password: textp.current.value}).then(() => {
                navigate('/')
            })
        }
        else {
            setText_err("รหัสผ่านไม่ถูกต้อง")
        }
    }

    return (
        <div className="container">
            <img src={logo} alt="Image 1" className="image-front" />
            <div className="container-1">
                <div className='container_re2'>
                    <form action="">
                        <h1>New Password</h1>
                        <div className='input-box'>
                            <input type="password" ref={textp} placeholder='Password' required />
                            <FaLock className='icon' />
                        </div>
                        <div className='input-box'>
                            <input type="password" ref={conp} placeholder='Confirm Password' required />
                            <GiConfirmed className='icon' />
                        </div>
                        <p style={{textAlign:"center",color:"red",marginTop:"-20px",marginBottom:"20px"}}>{text_err}</p>
                        <button type='button' onClick={getUser} className='Link'>Confirm</button>

                    </form>
                </div>

            </div>
            <div className="container-2">
                <h1>foodcipes</h1>
            </div>
        </div>
    )
}

export default Repassword