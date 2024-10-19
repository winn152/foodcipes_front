import { useState, useEffect, useRef } from 'react';
import logo from '../../Assets/logo.jpg';
import { Link, useNavigate } from "react-router-dom";
import './Register.css';
import { FaUser, FaLock, FaImages } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import Axios from 'axios';
import { baseUrl } from '../../../baseUrl'

function Register() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const conPasswordRef = useRef(null);
    const fileInputRef = useRef(null);
    const [text_err,setText_err] = useState("");
    const [pass_err,setPass_err] = useState("");

    const [user_img , setUser_img] = useState();

    const [userList, setUserList] = useState([]);
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        Axios.get(baseUrl+'/api/see/user')
            .then((response) => {
                setUserList(response.data);
            })
    }, []);

    const ud = () => {
        setName(nameRef.current.value);
        setEmail(emailRef.current.value);
        setPassword(passwordRef.current.value);
    };

    const getUser = () => {
        let sum = 0;
        setText_err("")
        setPass_err("")
        const username = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passwordRef.current.value;
        const conPass = conPasswordRef.current.value;

        userList.map(i => {
            if (i.email === email) {
                sum = 1;
                setText_err("อีเมลนี้มีผู้ใช้ไปแล้ว")
            }
        });
        if (username === "" || email === "" || pass === "" || conPass === "") {
            sum = 1;
        }
        if (pass !== conPass) {
            sum = 1;
            setPass_err("รหัสผ่านไม่ถูกต้อง")
        }
        if (sum === 0) {
            addUser();
        }

    };

    const addUser = () => {
        const formData = new FormData();
        formData.append('name', Name);
        formData.append('email', Email);
        formData.append('password', Password);
        formData.append('img_pf', user_img);
        Axios.post(baseUrl+'/api/add/user',formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(()=>{
            navigate('/');
        })
        
    };

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (upload) => {
                setImagePreviewUrl(upload.target.result);
            };
            reader.readAsDataURL(file);
            setUser_img(file)
        }
    };

    return (
        <div className="container">
            <img src={logo} alt="Image 1" className="image-front" />
            <div className="container-1">
                <div className='wrapper'>
                    <form action="">
                        <h1>Register</h1>
                        <div className='image-container' onClick={handleIconClick}>
                            {imagePreviewUrl ? (
                                <img src={imagePreviewUrl} alt="Profile" className="profile-image" />
                            ) : (
                                <FaImages className="image-icon" />
                            )}
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                            accept="image/*"

                        />
                        <div className='input-box'>
                            <input type="text" placeholder='Username' ref={nameRef} onChange={ud} required />
                            <FaUser className='icon' />
                        </div>
                        <div className='input-box'>
                            <input type="text" placeholder='Email' ref={emailRef} onChange={ud} required />
                            <MdEmail className='icon' />
                        </div>
                        <p style={{textAlign:"center",color:"red",marginBottom:"20px"}}>{text_err}</p>
                        <div className='input-box'>
                            <input type="password" placeholder='Password' ref={passwordRef} onChange={ud} required />
                            <FaLock className='icon' />
                        </div>
                        <div className='input-box'>
                            <input type="password" placeholder='Confirm Password' ref={conPasswordRef} required />
                            <GiConfirmed className='icon' />
                        </div>
                        <p style={{textAlign:"center",color:"red",marginBottom:"20px"}}>{pass_err}</p>
                        <button type='button' onClick={getUser}>Register</button>
                        <div className='register-link'>
                            <p>Already have an account? <Link to="/">Login here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container-2">
                <h1>foodcipes</h1>
            </div>
        </div>
    );
}

export default Register;
