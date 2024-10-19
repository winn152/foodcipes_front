/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react'
import './LoginForm.css'
import logo from '../../Assets/logo.jpg';
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useRef, useState } from 'react';
import Axios from 'axios';
import { baseUrl } from '../../../baseUrl'

const LoginForm = () => {

    const userID = sessionStorage.getItem('userId');
    const typeUser = sessionStorage.getItem('typeUser');
    const [text_err,setText_err] = useState("");

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (userID != null) {
            if( typeUser == 1 ){
                navigate("/Home");
            }
            else if( typeUser == 2){
                navigate("/HomeAdmin")
            }
        }
    },[navigate, typeUser, userID]);

    const ud = () => {
        setEmail(emailRef.current.value);
        setPassword(passwordRef.current.value);
    };

    const getUser = () => {
        Axios.post(baseUrl+'/api/login', {
            email: Email,
            password: Password
        }).then((response) => {
            sessionStorage.setItem('userId', response.data[0].user_id)
            sessionStorage.setItem('typeUser',response.data[0].type_user)
            if (response.data[0].type_user == 1) {
                navigate('/Home')
            }
            else if(response.data[0].type_user == 2) {
                navigate('/HomeAdmin')
            }

        }).catch(() => {
            setText_err("อีเมล หรือรหัสผ่านไม่ถูกต้อง")
        })
    }

    return (
        <div className="container">
            <img src={logo} alt="Image 1" className="image-front" />
            <div className="container-1">
                <div className='wrapper1'>
                    <form action="">
                        <h1>Login</h1>
                        <div className='input-box'>
                            <input type="text" placeholder='Email' ref={emailRef} onChange={ud} required />
                            <MdEmail className='icon' />
                        </div>
                        <div className='input-box'>
                            <input type="password" placeholder='Password' ref={passwordRef} onChange={ud} required />
                            <FaLock className='icon' />
                        </div>
                        <p style={{textAlign:"center",color:"red",marginTop:"-20px",marginBottom:"20px"}}>{text_err}</p>
                        <div className='remember-forgot'>
                            <Link to="/Forgot">Forgot your passowrd?</Link>
                        </div>

                        <button type='reset' 
                        onClick={getUser}>
                            Login
                        </button>
                        <div className='register-link'>
                            <p>Don't have an account? <Link to="/Register">Register</Link></p>
                        </div>
                    </form>
                </div>

            </div>
            <div className="container-2">
                <h1>foodcipes</h1>
            </div>
        </div>
    )
}

export default LoginForm;