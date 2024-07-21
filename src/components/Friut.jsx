import React from 'react';
import img from "../assets/img/feature1.webp";
import pro1 from "../assets/img/product1.webp";
import pro2 from "../assets/img/product6.webp";
import pro3 from "../assets/img/product3.webp";
import pro4 from "../assets/img/product4.webp";
import Friutcart from './Friutcart';


function Friut() {
  return (
    <div className='p-5 md:px-32 px-5 pt-10'>
        <div className=' lg:flex justify-between '>
            <div className=' flex flex-col space-y-2'>
                <h1 className=' font-semibold text-xl'> Fruits & Vegetables </h1>
                <span className=' font-medium text-lg'> Buy fram fresh fruits & vegrtable at the best place</span>
            </div>
            <div className='  space-x-4'>
              <button className=' text-lg py-1 rounded-full px-2  text-white   hover:scale-105  bg-amber-600 font-medium'> Fruits</button>
              <button className=' text-lg font hover:text-amber-600'> Vegetable</button>
              <button className=' text-lg font hover:text-amber-600'> Bread & Bakery</button>
            </div>
        </div>
        <div className=' mt-5  grid lg:grid-cols-5 gap-3 md:grid-cols-2 sm:grid-cols-1'>
           <div > <img  className=' w-full h-full object-cover' src={img} alt="" /> </div>
            <Friutcart img={pro1} name=' Dried Mango' price=' $500' />
            <Friutcart img={pro2} name=' Crunchy Crisps' price=' $340' />
            <Friutcart img={pro3} name=' Banana' price=' $876' />
            <Friutcart img={pro4} name=' Red Dates' price=' $342' />
        </div>
    </div>
  )
}

export default Friut