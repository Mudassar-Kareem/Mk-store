import React from 'react';
import img1 from "../assets/img/feature2.webp";
import pro5 from "../assets/img/product5.webp";
import pro6 from "../assets/img/product6.webp";
import pro7 from "../assets/img/product7.webp";
import pro8 from "../assets/img/product8.webp";
import Dairycart from './Dairycart';

function Dairy() {
  return (
    <div className="p-5 md:px-32 px-5 pt-16 pb-20 ">
        <div className="lg:flex justify-between">
            <div className="flex flex-col space-y-3">
                <h1 className=' font-semibold  text-xl'> Breakfast & Dairy</h1>
                <span className=' font-medium text-lg'> Buy best quality breakfast online from big-basket stop near you.</span>
            </div>
            <div className=' space-x-5 '>
                <button className='text-lg px-1 py-1 rounded-full text-white font-medium hover:scale-105 bg-amber-600'> Eggs & Dairy</button>
                <button className=' font-medium text-lg hover:text-amber-600'> Pizza</button>
                <button className=' font-medium text-lg hover:text-amber-600'> Snacks</button>
            </div>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 pt-5 gap-5">
            <div>
                <img className=' w-full h-full object-cover' src={img1} alt="" />
            </div>
            <Dairycart img={pro5} name='Fresh Tomato' price='$321'/>
            <Dairycart img={pro6} name='Crunchy Crisps' price='$123'/>
            <Dairycart img={pro7} name=' Jewel Cranberries' price='$654'/>
            <Dairycart img={pro8} name='Almond organic' price='$456'/>
        </div>
    </div>
  )
}

export default Dairy