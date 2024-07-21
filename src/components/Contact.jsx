import React from 'react';
import {SlEnvolopeLetter} from "react-icons/sl";

function Contact() {
  return (
    <div className=' p-2 mb-20 md:px-32 px-5  bg-amber-600'>
        <div className=' flex flex-col md:flex-row justify-between md:gap-0 gap-3  items-center'>
            <div className=' flex gap-5'>
                <div className=' flex items-center text-white' >  <SlEnvolopeLetter size={30}/></div>
                <div>
                <h1 className=' font-semibold text-2xl  text-white'>Sign up To Our Newsletters</h1>
                <span className=' font-medium text-lg  text-white'>...and receive $20 coupon for first shopping</span>
                </div>
            </div>
            <div className=' bg-white p-4  rounded-full md:space-x-3 space-x-0'>
                <input className=' border-none outline-none' type="text" placeholder=' Enter Your Email Here' />
                <button className=' bg-amber-600 md:hover:scale-105  px-1 py-1 text-white  md:font-medium font-normal  rounded-full'> Subscribe!</button>
            </div>
        </div>
    </div>
  )
}

export default Contact;