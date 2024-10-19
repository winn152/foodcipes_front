import { FaRegUser } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import React from 'react'
import "./Search2.css"
import Navbar from '../Navber/Navbar';
import logo from '../../Assets/logo.jpg';
import { IoRibbon } from "react-icons/io5";
import { IoRibbonOutline } from "react-icons/io5";




function Search2() {
  return (
    <div className="b">
      <Navbar />
      <div className="containers">
        <div className="containers1">
          <a href="/Home" className="flex items-center space-x-8 rtl:space-x-reverse">
            <img src={logo} className="h-20" alt="foodcipes Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">foodcipes</span>
          </a>

          <form className='w-[450px] relative'>
            <div className="relative">
              <input
                type="search"
                placeholder="Type the menu name"
                className='w-full p-4 bg-white rounded-full no-border'
              />
            </div>
            <button
              className='absolute right-1 top-1/2 -translate-y-1/2 p-4 text-white focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2'
              style={{
                backgroundColor: '#2EC4B6',
                borderColor: '#2EC4B6',
                marginTop: '5px',
              }}
            >
              Search
            </button>
          </form>
        </div>
        <div className="containerse7">
          <div className="containerp3">
            <a href="#" className="min-w-[600px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex flex-col justify-between p-4">
                <IoRibbonOutline size={24} color="orange"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    margin: 5,
                  }}
                />
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    src="https://media.istockphoto.com/id/1963249822/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/young-beautiful-woman-in-headphones-working-with-laptop-inside-office-at-workplace-joyful.jpg?s=612x612&w=0&k=20&c=nRgEt_coG4QOrj4_ftsy7_PKndLIBsAzZTcJ0kczTXU="
                    alt="Profile"
                  />
                  <h1>Lian</h1>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Green tea</h5>
                <div className="flex">
                  <div className="flex flex-row w-[100px] justify-between items-center pr-3">
                    <FaRegClock size={20} />
                    <p>30</p>
                    <p>min</p>
                  </div>
                  <div className="flex flex-row w-[100px] justify-between items-center">
                    <FaRegUser size={20} />
                    <p>1-2</p>
                    <p>people</p>
                  </div>
                </div>
              </div>
              <img
                className="h-[140px] object-cover rounded-lg order-last"
                src="https://media.istockphoto.com/id/1356367433/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%99%E0%B8%A1%E0%B8%96%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%A5%E0%B8%87%E0%B9%83%E0%B8%99%E0%B8%8A%E0%B8%B2%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87%E0%B8%A1%E0%B8%B1%E0%B8%97%E0%B8%89%E0%B8%B0.jpg?s=612x612&w=0&k=20&c=J0KxNk0xpB0zLUruh-8iVKAmZmthtdmItseAhOZQSzk="
                alt="Image"
              />
            </a>
            <a href="#" className="min-w-[600px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex flex-col justify-between p-4">
                <IoRibbonOutline size={24} color="orange"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    margin: 5,
                  }}
                />
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    src="https://media.istockphoto.com/id/1488503176/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%8A%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%A2%E0%B8%B8%E0%B8%84%E0%B8%A1%E0%B8%B4%E0%B8%A5%E0%B9%80%E0%B8%A5%E0%B8%99%E0%B9%80%E0%B8%99%E0%B8%B5%E0%B8%A2%E0%B8%A5%E0%B9%80%E0%B8%AB%E0%B8%87%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%AD%E0%B9%80%E0%B8%A5%E0%B8%98%E0%B8%B4%E0%B8%84%E0%B9%83%E0%B8%99%E0%B8%8A%E0%B8%B8%E0%B8%94%E0%B8%81%E0%B8%B5%E0%B8%AC%E0%B8%B2%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B8%96%E0%B8%99%E0%B8%99%E0%B9%83%E0%B8%99%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B8%B0.jpg?s=612x612&w=0&k=20&c=mBN9Jo1ZPl1clOne3-5jKCgsJKHzZYUSMDlvzlFv2jg=" alt="Profile"
                  />
                  <h1>John</h1>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Black Coffee</h5>
                <div className="flex">
                  <div className="flex flex-row w-[100px] justify-between items-center pr-3">
                    <FaRegClock size={20} />
                    <p>15</p>
                    <p>min</p>
                  </div>
                  <div className="flex flex-row w-[100px] justify-between items-center">
                    <FaRegUser size={20} />
                    <p>1</p>
                    <p>person</p>
                  </div>
                </div>
              </div>
              <img
                className="h-[140px] object-cover rounded-lg order-last"
                src="https://media.istockphoto.com/id/1271386167/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F.jpg?s=612x612&w=0&k=20&c=HZqsxM7ZqhmMRBw8zMEAVBaUqKaFoGTjfqf4E64RGsU=" alt="Image"
              />
            </a>
            <a href="#" className="min-w-[600px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex flex-col justify-between p-4">
                <IoRibbonOutline size={24} color="orange"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    margin: 5,
                  }}
                />
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    src="https://media.istockphoto.com/id/1499214500/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87%E0%B8%AA%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%88%E0%B8%B5%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%AD%E0%B8%87.jpg?s=612x612&w=0&k=20&c=MyGsYlhtwbyU-jmRaDMfroqPhzfAnGwE1REt2XGKZSw=" alt="Profile"
                  />
                  <h1>Emily</h1>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Matcha Latte</h5>
                <div className="flex">
                  <div className="flex flex-row w-[100px] justify-between items-center pr-3">
                    <FaRegClock size={20} />
                    <p>25</p>
                    <p>min</p>
                  </div>
                  <div className="flex flex-row w-[100px] justify-between items-center">
                    <FaRegUser size={20} />
                    <p>2-3</p>
                    <p>people</p>
                  </div>
                </div>
              </div>
              <img
                className="h-[140px] object-cover rounded-lg order-last"
                src="https://media.istockphoto.com/id/1594231829/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%82%E0%B8%84%E0%B8%A5%E0%B8%AA%E0%B8%AD%E0%B8%B1%E0%B8%9E%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%84%E0%B9%89%E0%B8%81%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%9B%E0%B8%A1%E0%B8%B1%E0%B8%97%E0%B8%89%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%9A-genmaicha-uji-latte-%E0%B9%83%E0%B8%99%E0%B8%8A%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%8B%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%B4%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%94%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%A1%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99.jpg?s=612x612&w=0&k=20&c=m-hKFM7gcpn5XMHNZjk4IQMj1N4HbuN-y55s6JTMoUE=" alt="Image"
              />
            </a>
            <a href="#" className="min-w-[600px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex flex-col justify-between p-4">
                <IoRibbonOutline size={24} color="orange"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    margin: 5,
                  }}
                />
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    src="https://media.istockphoto.com/id/2052212144/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%A0%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%9A%E0%B8%99%E0%B8%97%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%A2%E0%B8%B7%E0%B8%99%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%87-%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%A0%E0%B9%8C%E0%B9%83%E0%B8%99%E0%B8%8A%E0%B8%B8%E0%B8%94%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%97%E0%B8%B2.jpg?s=612x612&w=0&k=20&c=n2KJNmL4iawsaGn7fCaU7HaQRvc-HcSRNYlPVCIXG0k=" alt="Profile"
                  />
                  <h1>Oliver</h1>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fruit Smoothie</h5>
                <div className="flex">
                  <div className="flex flex-row w-[100px] justify-between items-center pr-3">
                    <FaRegClock size={20} />
                    <p>10</p>
                    <p>min</p>
                  </div>
                  <div className="flex flex-row w-[100px] justify-between items-center">
                    <FaRegUser size={20} />
                    <p>1-2</p>
                    <p>people</p>
                  </div>
                </div>
              </div>
              <img
                className="h-[140px] object-cover rounded-lg order-last"
                src="https://media.istockphoto.com/id/531477972/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%A1%E0%B8%B9%E0%B8%97%E0%B8%95%E0%B8%B5%E0%B9%89%E0%B8%9C%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%9C%E0%B8%AA%E0%B8%A1%E0%B8%AA%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B9%83%E0%B8%99%E0%B8%82%E0%B8%A7%E0%B8%94%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%9F%E0%B8%B2%E0%B8%87.jpg?s=612x612&w=0&k=20&c=nDCpY59B3Azu7CHU3SpIKGT3DfDolPFVWZnqL0IdP7Y=" alt="Image"
              />
            </a>
            <a href="#" className="min-w-[600px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex flex-col justify-between p-4">
                <IoRibbonOutline size={24} color="orange"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    margin: 5,
                  }}
                />
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    src="https://media.istockphoto.com/id/1536734024/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87%E0%B8%AA%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%81%E0%B8%AD%E0%B8%94%E0%B9%81%E0%B8%A1%E0%B8%A7%E0%B8%9A%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5-%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%A3%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%87%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87.jpg?s=612x612&w=0&k=20&c=iA7uzBgSuKBmibu7Ij2lKTVYZEM5bDgNj5GXIvXfB88=" alt="Profile"
                  />
                  <h1>Emma</h1>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hot Chocolate</h5>
                <div className="flex">
                  <div className="flex flex-row w-[100px] justify-between items-center pr-3">
                    <FaRegClock size={20} />
                    <p>20</p>
                    <p>min</p>
                  </div>
                  <div className="flex flex-row w-[100px] justify-between items-center">
                    <FaRegUser size={20} />
                    <p>1-3</p>
                    <p>people</p>
                  </div>
                </div>
              </div>
              <img
                className="h-[140px] object-cover rounded-lg order-last"
                src="https://media.istockphoto.com/id/872027048/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B8%8A%E0%B9%87%E0%B8%AD%E0%B8%84%E0%B9%82%E0%B8%81%E0%B9%81%E0%B8%A5%E0%B8%95%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%AE%E0%B8%A1%E0%B9%80%E0%B8%A1%E0%B8%94%E0%B8%AA%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%9A%E0%B8%9A%E0%B8%99%E0%B9%82%E0%B8%95%E0%B9%8A%E0%B8%B0%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%8A%E0%B8%99%E0%B8%9A%E0%B8%97.jpg?s=612x612&w=0&k=20&c=pgbGiQrJ-i_Q0Pe_P1FCFKUV7nuQFWa06sITh2qKmpg=" alt="Image"
              />
            </a>
          </div>

        </div>
        {/* <div className="containerse2">
          <h2>Lastest Search</h2>
          <div className="containerse4">
            <a href="#" class="min-width-300 h-[80px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden">
              <img class="object-cover  h-full" src="https://media.istockphoto.com/id/1082538316/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%82%E0%B8%AE%E0%B8%A1%E0%B9%80%E0%B8%A1%E0%B8%94%E0%B8%97%E0%B8%87%E0%B8%84%E0%B8%95%E0%B8%AA%E0%B8%B6%E0%B8%A3%E0%B8%B2%E0%B9%80%E0%B8%A1%E0%B8%99.jpg?s=612x612&w=0&k=20&c=UyIAwH3fzTPUVy_DdKrPpzBKWDCHYZ2R0ZE8h1NNjE0=" alt="" />
              <div className="lasts">
                <h5 class=" font-bold tracking-tight text-gray-900 dark:text-white">Pork Belly Ramen</h5>
                <h5 class="font-bold tracking-tight text-gray-900 dark:text-white">3 day</h5>
              </div>
            </a>

            <a href="#" class="min-width-300  h-[80px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden">
              <img class="object-cover  h-full"
                src="https://media.istockphoto.com/id/1350409078/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%80%E0%B8%9B%E0%B8%A3%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%A7%E0%B8%AB%E0%B8%A7%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B5%E0%B8%99%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%84%E0%B8%9B.jpg?s=612x612&w=0&k=20&c=8cstzfpP--cPJhYIGnm_jjESxfwGKxatLuK1O1UaWTM=" alt="" />
              <div className="lasts">
                <h5 class=" font-bold tracking-tight text-gray-900 dark:text-white">Sweet and Sour Pork</h5>
                <h5 class="font-bold tracking-tight text-gray-900 dark:text-white">5 day</h5>
              </div>
            </a>



          </div>
        </div> */}
        {/* <div className="containerse3">
          <h2>Recently Viewed Recipes</h2>
          <div className="containerse5">
            <div class="w-[170px] min-h-[220px]  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-[20px]">
              <a href="#">
                <img class="rounded-t-lg w-full"
                  src="https://media.istockphoto.com/id/506916161/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9E%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B9%89%E0%B8%B2-fettucini-aflredo-%E0%B9%82%E0%B8%AE%E0%B8%A1%E0%B9%80%E0%B8%A1%E0%B8%94.jpg?s=612x612&w=0&k=20&c=LSiUzzyB8gY4_y_gSZWEiS1IYuxBoSbTHV4wCs-OWRo=" alt="" />
              </a>
              <div className="profile">
                <div className="p-2 a">
                  <img
                    className='w-8 h-8 rounded-full object-cover'
                    src="https://media.istockphoto.com/id/1963249822/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/young-beautiful-woman-in-headphones-working-with-laptop-inside-office-at-workplace-joyful.jpg?s=612x612&w=0&k=20&c=nRgEt_coG4QOrj4_ftsy7_PKndLIBsAzZTcJ0kczTXU="
                    alt="Profile"
                  />
                  <p>Olivia</p>
                </div>
              </div>
              <h5>
                Chicken Alfredo Pasta
              </h5>
            </div>
            <div class="w-[170px] min-h-[220px]  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <a href="#">
                <img class="rounded-t-lg w-full"
                  src="https://media.istockphoto.com/id/1934924558/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B9%82%E0%B8%95%E0%B8%A3%E0%B8%81%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%9F%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AD%E0%B8%A3%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%B0.jpg?s=612x612&w=0&k=20&c=lOFmK_IXIe5tAYdpEEsh-mG38VS_3l7UA8n5N5I08JM=" alt="" />
              </a>
              <div className="profile">
                <div className="p-2 a">
                  <img
                    className='w-8 h-8 rounded-full object-cover'
                    src="https://media.istockphoto.com/id/1963249822/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/young-beautiful-woman-in-headphones-working-with-laptop-inside-office-at-workplace-joyful.jpg?s=612x612&w=0&k=20&c=nRgEt_coG4QOrj4_ftsy7_PKndLIBsAzZTcJ0kczTXU="
                    alt="Profile"
                  />
                  <p>Elsa</p>
                </div>
              </div>
              <h5>
                Beef Stroganoff
              </h5>
            </div>

          </div>
        </div> */}
      </div>

    </div>

  )
}

export default Search2