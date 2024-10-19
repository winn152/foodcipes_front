import './Notifications.css'
import Navbar from '../Navber/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import './Notifications.css'
import { IoNotificationsSharp } from "react-icons/io5";
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from "../../../baseUrl";


function Notifications() {
    const userID = sessionStorage.getItem('userId');
    const checkReload = sessionStorage.getItem("reload");
    const [noti, setNoti] = useState([]);
    const navigate = useNavigate();
    

    useEffect(() => {
        Axios.get(baseUrl + '/api/see/report_noti/' + userID).then((response) => {
            setNoti(response.data);
        })
        if (checkReload == 1) {
            navigate(0);
            sessionStorage.setItem("reload", 2);
          }
    },[checkReload, navigate, userID])

    const type_re = (e) => {
        if(e == 1){
            return "เนื้อหาสุ่มเสี่ยงหรือไม่เหมาะสม";
          }
          else if(e == 2){
            return "มีเนื้อหาที่เป็นอันตรายหรือสุขภาพไม่ดี";
          }
          else if(e == 3){
            return "มีโฆษณาแฝงหรือสแปม";
          }
          else if(e == 4){
            return "รูปภาพหรือวิดีโอที่ไม่เหมาะสม";
          }
    }
    
    return (
        <div className="b">
            <Navbar />
            <div className="container_noti">
                <div className="container_noit2">
                    <div className="container_noti3">
                        <h1 className=''>Notifications</h1>
                        <IoNotificationsSharp />
                    </div>
                    <div className="container_noti4">
                        {noti.map((i) => {
                            return(
                                // eslint-disable-next-line react/jsx-key
                                <Link to='/DetailsDelete' state={i.post_id} className="container_noti1 ">
                                    <div className="containerp1j">
                                        <img
                                            className='w-12 h-12 rounded-full object-cover'
                                            src={i.img_pf}
                                            alt="Profile"
                                        />
                                        <div>
                                            <div className="container_row">
                                                <h1 style={{ fontWeight: 'bold' }}>{i.name}</h1>
                                                <h2 style={{ fontWeight: 'bold' }}>Team</h2>

                                            </div>
                                            <h1>Send you a message</h1>
                                            <p className='containerp1j_p'>
                                                {type_re(i.type_report)}
                                            </p>

                                        </div>

                                    </div>
                                </Link>
                            )
                        })}
                        {/* <div className="container_noti1 ">
                            <div className="containerp1j">
                                <img
                                    className='w-12 h-12 rounded-full object-cover'
                                    src="https://media.istockphoto.com/id/1963249822/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/young-beautiful-woman-in-headphones-working-with-laptop-inside-office-at-workplace-joyful.jpg?s=612x612&w=0&k=20&c=nRgEt_coG4QOrj4_ftsy7_PKndLIBsAzZTcJ0kczTXU="
                                    alt="Profile"
                                />
                                <div>
                                    <div className="container_row">
                                        <h1 style={{ fontWeight: 'bold' }}>Lian</h1>
                                        <h2 style={{ fontWeight: 'bold' }}>Team</h2>

                                    </div>
                                    <h1>Send you a message</h1>
                                    <p className='containerp1j_p'>
                                        ประกาศกิจกรรมพิเศษที่อยากชวนให้คุณ Jittipat Junphong มาเข้าร่วมด้วยแบบสุดๆ กับกิจกรรม #GlobalCookpadGame2024 ประกาศกิจกรรมพิเศษที่อยากชวนให้คุณ Jittipat Junphong มาเข้าร่วมด้วยแบบสุดๆ กับกิจกรรม #GlobalCookpadGame2024
                                    </p>

                                </div>

                            </div>
                        </div> */}
                        {/* <div className="container_noti1 ">
                            <div className="containerp1j">
                                <img
                                    className='w-12 h-12 rounded-full object-cover'
                                    src="https://media.istockphoto.com/id/1963249822/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/young-beautiful-woman-in-headphones-working-with-laptop-inside-office-at-workplace-joyful.jpg?s=612x612&w=0&k=20&c=nRgEt_coG4QOrj4_ftsy7_PKndLIBsAzZTcJ0kczTXU="
                                    alt="Profile"
                                />
                                <div>
                                    <div className="container_row">
                                        <h1 style={{ fontWeight: 'bold' }}>Lian</h1>
                                        <h2 style={{ fontWeight: 'bold' }}>Team</h2>

                                    </div>
                                    <h1>Send you a message</h1>
                                    <p className='containerp1j_p'>
                                        ประกาศกิจกรรมพิเศษที่อยากชวนให้คุณ Jittipat Junphong มาเข้าร่วมด้วยแบบสุดๆ กับกิจกรรม #GlobalCookpadGame2024 ประกาศกิจกรรมพิเศษที่อยากชวนให้คุณ Jittipat Junphong มาเข้าร่วมด้วยแบบสุดๆ กับกิจกรรม #GlobalCookpadGame2024
                                    </p>

                                </div>

                            </div>
                        </div>
                        <div className="container_noti1 ">
                            <div className="containerp1j">
                                <img
                                    className='w-12 h-12 rounded-full object-cover'
                                    src="https://media.istockphoto.com/id/1963249822/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/young-beautiful-woman-in-headphones-working-with-laptop-inside-office-at-workplace-joyful.jpg?s=612x612&w=0&k=20&c=nRgEt_coG4QOrj4_ftsy7_PKndLIBsAzZTcJ0kczTXU="
                                    alt="Profile"
                                />
                                <div>
                                    <div className="container_row">
                                        <h1 style={{ fontWeight: 'bold' }}>Lian</h1>
                                        <h2 style={{ fontWeight: 'bold' }}>Team</h2>

                                    </div>
                                    <h1>Send you a message</h1>
                                    <p className='containerp1j_p'>
                                        ประกาศกิจกรรมพิเศษที่อยากชวนให้คุณ Jittipat Junphong มาเข้าร่วมด้วยแบบสุดๆ กับกิจกรรม #GlobalCookpadGame2024 ประกาศกิจกรรมพิเศษที่อยากชวนให้คุณ Jittipat Junphong มาเข้าร่วมด้วยแบบสุดๆ กับกิจกรรม #GlobalCookpadGame2024
                                    </p>

                                </div>

                            </div>
                        </div>
                        <div className="container_noti1 ">
                            <div className="containerp1j">
                                <img
                                    className='w-12 h-12 rounded-full object-cover'
                                    src="https://media.istockphoto.com/id/1963249822/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/young-beautiful-woman-in-headphones-working-with-laptop-inside-office-at-workplace-joyful.jpg?s=612x612&w=0&k=20&c=nRgEt_coG4QOrj4_ftsy7_PKndLIBsAzZTcJ0kczTXU="
                                    alt="Profile"
                                />
                                <div>
                                    <div className="container_row">
                                        <h1 style={{ fontWeight: 'bold' }}>Lian</h1>
                                        <h2 style={{ fontWeight: 'bold' }}>Team</h2>

                                    </div>
                                    <h1>Send you a message</h1>
                                    <p className='containerp1j_p'>
                                        ประกาศกิจกรรมพิเศษที่อยากชวนให้คุณ Jittipat Junphong มาเข้าร่วมด้วยแบบสุดๆ กับกิจกรรม #GlobalCookpadGame2024 ประกาศกิจกรรมพิเศษที่อยากชวนให้คุณ Jittipat Junphong มาเข้าร่วมด้วยแบบสุดๆ กับกิจกรรม #GlobalCookpadGame2024
                                    </p>

                                </div>

                            </div>
                        </div> */}
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Notifications