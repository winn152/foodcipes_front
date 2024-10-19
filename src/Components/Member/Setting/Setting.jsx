import React, { useState } from 'react'
import Profile from '../Profile/Profile'
import Navbar from '../Navber/Navbar'
import './Setting.css'
import { Link } from 'react-router-dom';

function Setting() {

    const hh = () =>{
        sessionStorage.clear();
    }

    return (
        <div className='b'>
            <Navbar />
            <div className="containerp">
                <Profile />
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

export default Setting