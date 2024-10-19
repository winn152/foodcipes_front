import './Forgot.css'
import logo from '../../Assets/logo.jpg';
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import { baseUrl } from '../../../baseUrl';
import { useRef, useState } from 'react';


function Forgot() {

    const email = useRef();
    const [text_err,setText_err] = useState("");
    const navigate = useNavigate();


    const getUser = () => {
        setText_err("")
        
        Axios.post(baseUrl + '/api/forgot',{email: email.current.value}).then((response) => {
            navigate('/Repassword', { state: { userId: response.data[0].user_id }});
        })
        .catch(() => {
            setText_err("ไม่พบอีเมลที่ท่านค้นหา")
        })
    }

    return (
        <div className="container">
            <img src={logo} alt="Image 1" className="image-front" />
            <div className="container-1">
                <div className='containerf2'>
                    <form action="">
                        <h1>Forgot</h1>
                        <div className='input-box'>
                            <input type="text" ref={email} placeholder='Email' required />
                            <MdEmail className='icon' />
                        </div>
                        <p style={{textAlign:"center",color:"red",marginTop:"-20px",marginBottom:"20px"}}>{text_err}</p>
                        <button type='button' onClick={getUser} className='Link'>OK</button>
                        <div className='register-link'>
                            {/* <p>Don't have an account? <Link to="/Register">Register</Link></p> */}
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

export default Forgot