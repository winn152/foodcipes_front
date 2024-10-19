import NavAd from '../NavAd/NavAd'
import './Report.css'
import { FaRegMessage } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Axios from 'axios';
import { baseUrl } from '../../../baseUrl';

function Report() {

  const [reportPost,setReportPost] = useState([]);

  const name_type_report = (e) => {
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

  useEffect(() => {
    Axios.get(baseUrl+"/api/see/report_user").then((response) => {
      setReportPost(response.data)
    })
  })

  return (
    <>
      <NavAd />
      <div className="bg">
        <div className="reportcon">
          <div className="iconreport">
            <FaRegMessage />
            <h1>Report</h1>
          </div>
          {reportPost.map((i) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="detailsReport">
                <div className="indetails">
                  <img
                    src={i.img_pf}
                  />
                  <div className="headreport">
                    <h4>{i.username} : {name_type_report(i.type_report)}</h4>
                    <Link to="/DetailRepost" state={{ postID: i.post_id, reportID: i.report_id }}>
                    <div className="postreport">
                      <img src={i.img_main} className="h-12" alt="foodcipes Logo" />
                      <h2>{i.postname}</h2>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
          

          {/* <div className="detailsReport">
            <div className="indetails">
              <img
                src='https://media.istockphoto.com/id/1151279069/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%A3%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%A3%E0%B8%B4%E0%B8%87%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%82%E0%B8%9F%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B8%96%E0%B8%99%E0%B8%99.jpg?s=612x612&w=0&k=20&c=jFehaiV-P6V6uBvpU44gqcN8qNRZY99TraBSwFZgYcA='
              ></img>
              <div className="headreport">
                <h4>Ethan : เนื้อหาไม่เหมาะสม</h4>
                <div className="postreport">
                  <img src="https://media.istockphoto.com/id/1496292310/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87%E0%B8%AA%E0%B8%B2%E0%B8%A7%E0%B8%88%E0%B8%B5%E0%B8%99%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%96%E0%B8%99%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%81%E0%B8%AA%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%94%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%81%E0%B9%88%E0%B8%B2.jpg?s=612x612&w=0&k=20&c=laXAJT_XKdQO1ZwtyVapvMA6KjT9WiNHdCYi09_mQr0=" class="h-12" alt="foodcipes Logo" />
                  <h2>Steamed rice topped with chicken</h2>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Report