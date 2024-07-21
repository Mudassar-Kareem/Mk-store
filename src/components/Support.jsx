import React from 'react';
import {MdOutlineDeliveryDining} from "react-icons/md";
import {MdCurrencyExchange} from "react-icons/md";
import {FiGift} from "react-icons/fi";
import {BiSolidPhoneCall} from "react-icons/bi";

function Support() {
  return (
    <div className=' p-5 md:px-32 px-5 pb-20'>
        <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1  gap-5 '>
            <div className=' flex gap-5  items-center '>
                <div className=' text-amber-600 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-4 rounded-full'>
                    <MdOutlineDeliveryDining size={45}/>
                </div>
                <div className=' flex flex-col space-y-1'>
                    <h1 className=' font-semibold text-xl text-amber-600 '>  Free Shipping</h1>
                    <span className=' font-medium text-sm text-slate-500'>Lorem, ipsum dolor.</span>
                </div>
            </div>

            <div className=' flex gap-5  items-center '>
                <div className=' text-amber-600 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-4 rounded-full'>
                    <MdCurrencyExchange size={45}/>
                </div>
                <div className=' flex flex-col space-y-1'>
                    <h1 className=' font-semibold text-xl text-amber-600 '> Best Price Guarantee</h1>
                    <span className=' font-medium text-sm text-slate-500'>Lorem, ipsum dolor.</span>
                </div>
            </div>

            <div className=' flex gap-5  items-center '>
                <div className=' text-amber-600 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-4 rounded-full'>
                    <FiGift size={45}/>
                </div>
                <div className=' flex flex-col space-y-1'>
                    <h1 className=' font-semibold text-xl text-amber-600 '>Free Curbside Pickup </h1>
                    <span className=' font-medium text-sm text-slate-500'>Lorem, ipsum dolor.</span>
                </div>
            </div>

            <div className=' flex gap-5  items-center '>
                <div className=' text-amber-600 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-4 rounded-full'>
                    <BiSolidPhoneCall size={45}/>
                </div>
                <div className=' flex flex-col space-y-1'>
                    <h1 className=' font-semibold text-xl text-amber-600 '> Support 24/7 </h1>
                    <span className=' font-medium text-sm text-slate-500'>Lorem, ipsum dolor.</span>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Support