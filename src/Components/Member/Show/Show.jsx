import { GoComment } from "react-icons/go";
import "./Show.css"
import Navbar from '../Navber/Navbar'
import { FaRegUser } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const Show = () => {
  return (
    <div className="b">
      <Navbar />
      <div className="containershowout">
        <div className="containershow">
          <img
            className='imgmainshow'
            src="https://media.istockphoto.com/id/182890318/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%81%E0%B8%99%E0%B8%AA%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%8A%E0%B8%B2%E0%B8%A1%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%B4%E0%B8%87%E0%B8%81%E0%B8%A7%E0%B8%B4%E0%B8%99%E0%B8%B5%E0%B8%84%E0%B8%B2%E0%B9%82%E0%B8%9A%E0%B8%99%E0%B8%B2%E0%B8%A3%E0%B9%88%E0%B8%B2.jpg?s=612x612&w=0&k=20&c=B6YGFMK777l3SIAh2AxOym7WneND0gofD2KQPnEQys4="
            alt="description"
          />
          <div className="containershow1">
            <h1>Spaghetti Carbonara </h1>
            {/* <CiHeart className="iconfeelingshow" /> */}
          </div>
          <div className="containershow2">
            <h1>Ingredient</h1>
            <div className="iconshow">
              <div className="time">
                <p><FaRegClock size={20} /></p>
                <p>20</p>
                <p>min</p>
              </div>
              <div className="people">
                <p><FaRegUser size={20} /></p>
                <p>1-3</p>
                <p>people</p>
              </div>
            </div>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, fuga? Accusantium non, neque dolor vitae laborum velit. Earum doloribus, dolor soluta consectetur culpa error id nostrum eius aliquid velit eaque autem sit quod quos. Rem odit incidunt quibusdam unde vel laudantium in magni, blanditiis modi cum vitae earum qui fuga iusto mollitia optio deserunt reiciendis. Quis tempore in libero ratione rerum maxime rem. Voluptate, sequi accusamus voluptatem dolores cum mollitia minus! Consequuntur numquam fuga laboriosam. Aperiam temporibus accusantium dolorem! Error, quisquam velit harum eaque blanditiis odit illum doloribus nam. Vel ducimus dolorum reiciendis numquam commodi culpa nisi delectus nihil accusantium.</h2>
          </div>
          <div className="containershow2">
            <h1>How to do it</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aliquid quidem mollitia tempore repudiandae autem commodi doloribus harum ipsa rem, minus ut cum quaerat pariatur voluptatem quam itaque sunt accusantium! Quisquam ab ullam commodi at suscipit harum eius, magnam necessitatibus consequuntur possimus aperiam cumque, rem alias delectus nobis impedit sed.</h2>
            <div className='imghowto'>
              <img
                className='imghowto1'
                src="https://media.istockphoto.com/id/182890318/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%81%E0%B8%99%E0%B8%AA%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%8A%E0%B8%B2%E0%B8%A1%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%B4%E0%B8%87%E0%B8%81%E0%B8%A7%E0%B8%B4%E0%B8%99%E0%B8%B5%E0%B8%84%E0%B8%B2%E0%B9%82%E0%B8%9A%E0%B8%99%E0%B8%B2%E0%B8%A3%E0%B9%88%E0%B8%B2.jpg?s=612x612&w=0&k=20&c=B6YGFMK777l3SIAh2AxOym7WneND0gofD2KQPnEQys4="
                alt="description"
              />
              <img
                className='imghowto1'
                src="https://media.istockphoto.com/id/182890318/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%81%E0%B8%99%E0%B8%AA%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%8A%E0%B8%B2%E0%B8%A1%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%B4%E0%B8%87%E0%B8%81%E0%B8%A7%E0%B8%B4%E0%B8%99%E0%B8%B5%E0%B8%84%E0%B8%B2%E0%B9%82%E0%B8%9A%E0%B8%99%E0%B8%B2%E0%B8%A3%E0%B9%88%E0%B8%B2.jpg?s=612x612&w=0&k=20&c=B6YGFMK777l3SIAh2AxOym7WneND0gofD2KQPnEQys4="
                alt="description"
              />
              <img
                className='imghowto1'
                src="https://media.istockphoto.com/id/182890318/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%81%E0%B8%99%E0%B8%AA%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%8A%E0%B8%B2%E0%B8%A1%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B8%B4%E0%B8%87%E0%B8%81%E0%B8%A7%E0%B8%B4%E0%B8%99%E0%B8%B5%E0%B8%84%E0%B8%B2%E0%B9%82%E0%B8%9A%E0%B8%99%E0%B8%B2%E0%B8%A3%E0%B9%88%E0%B8%B2.jpg?s=612x612&w=0&k=20&c=B6YGFMK777l3SIAh2AxOym7WneND0gofD2KQPnEQys4="
                alt="description"
              />
            </div>
          </div>
          <div className="feeling">
          <div className='iconfeeling'>
            <CiHeart className="iconfeelingshow" />
            <h1>Feelings</h1>
          </div>
          <a
            href="#"
            className="inline-flex items-center px-1 py-1 text-2xl font-medium text-black-600 bg-gray-300 rounded-2xl hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-500 ml-5"
          >
            <FaHeartCirclePlus />
          </a>
        </div>
          <div className="feeling">
            <div className='iconfeeling'>
              <GoComment className="iconfeelingshow" />
              <h1>Comment</h1>
            </div>
            <div className="pro_comment">
              <img
                className='w-12 h-12 rounded-full object-cover mr-3'
                src="https://media.istockphoto.com/id/2042526830/photo/successful-businesswoman-using-laptop-working-in-office-business-technology-corporate-concept.webp?b=1&s=170667a&w=0&k=20&c=Nh4UTuazGlQldGBdcd5SlErhzi3LwswCtAA4dJCgvIM=" alt="Profile"
              />
              <input type="text" className="mar10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Comment..." required />
              <button type="button" className="is w-[40px] h-[40px] flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="posted">
            <h1>Recipe posted by</h1>
            <div className="pronamedate">
              <img
                className='w-20 h-20 rounded-full object-cover mr-3'
                src="https://media.istockphoto.com/id/1963249822/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/young-beautiful-woman-in-headphones-working-with-laptop-inside-office-at-workplace-joyful.jpg?s=612x612&w=0&k=20&c=nRgEt_coG4QOrj4_ftsy7_PKndLIBsAzZTcJ0kczTXU="
                alt="Profile"
              />
              <h2>Liam</h2>
              <h3>On April 22, 2021</h3>
            </div>
          </div>
        </div>
        <div className="containershowout2">
          <button type="button" className="w-[100px] py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-yellow-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit</button>
          <button type="button" className="w-[100px] text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Show