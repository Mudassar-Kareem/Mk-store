import React from 'react';
import hero1 from '../assets/img/hero1.webp';
import hero2 from '../assets/img/hero2.webp';
import hero3 from '../assets/img/hero3.webp';
import {AiOutlineArrowRight} from "react-icons/ai"

function Hero() {
  return(
    <div className="pt-24 pb-10">
      <div className="grid sm:grid-cols-3 sm:grid-rows-2 gap-8  sm:px-32 px-5  ">
        <div className=" relative sm:col-span-2 sm:row-start-1 sm:row-end-[-1] ">
          <img src={hero1} alt="" className=' w-full h-full object-cover rounded-lg' />
          <div className=" absolute max-w-[400px] lg:top-[26%] top-[5%] lg:ml-16 ml-4 lg:space-y-3 space-y-0">
            <span className=' font-medium text-sm text-slate-400'> 100% Original Dry Fruits</span>
            <h1 className=' text-4xl font-bold'> Dried Fruits Best Healthy</h1>
            <span className=' font-medium text-sm text-slate-400'> Starting At</span>
            <p className=' text-4xl font-semibold text-amber-600	'> $18.36</p>
            <button className=' flex items-center gap-6 text-white py-3 rounded-full hover:scale-105 px-4 bg-amber-600 font-medium'> Shop Now  <AiOutlineArrowRight/>   </button>
          </div>
        </div>
         <div className='relative'>
            <img src={hero2} alt="" />
            <div className=" absolute max-w-[300px] xl:top-[20%] top-[5%] xl:ml-8 ml-2  xl:space-y-2 space-y-0">
            <h1 className=' text-2xl font-bold'> Best Yummy Pizza</h1>
            <span className=' font-medium text-sm text-slate-400'> Starting At</span>
            <p className=' text-2xl font-semibold text-amber-600	'> $15</p>
            <button className=' flex items-center gap-6 text-white py-3 rounded-full hover:scale-105 px-4 bg-amber-600 font-medium'> Shop Now  <AiOutlineArrowRight/>   </button>
           </div>

          </div>

          <div className=' relative '>
            <img src={hero3} alt="" />
            <div className=" absolute max-w-[300px] xl:top-[20%] top-[5%] xl:ml-8 ml-2  xl:space-y-2 space-y-0">
            <h1 className=' text-2xl font-bold'> Best Yummy Chips</h1>
            <span className=' font-medium text-sm text-slate-400'> Starting At</span>
            <p className=' text-2xl font-semibold text-amber-600	'> $9.99</p>
            <button className=' flex items-center gap-6 text-white py-3 rounded-full hover:scale-105 px-4 bg-amber-600 font-medium'> Shop Now  <AiOutlineArrowRight/>   </button>
           </div>
          </div>
      </div>
    </div>
  )
}

export default Hero;