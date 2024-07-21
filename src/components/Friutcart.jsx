import React from 'react';
import {AiFillStar} from "react-icons/ai";
import {AiOutlineStar} from "react-icons/ai";
import {BsFillBagHeartFill} from "react-icons/bs";

function Friutcart(props) {
  return (
    <div className=' flex justify-center  hover:scale-105  flex-col px-4 py-3   bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <div ><img src={props.img} alt="" /></div>
        
        <div className=' flex justify-between items-center '>
            <div className=' flex  '>
            <div className=' flex text-amber-600'>
               <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>  
                <div><AiOutlineStar/></div>
            </div>
            <div className=' bg-amber-600  px-2 py-2 rounded-full text-white'>
                <BsFillBagHeartFill size={25}/>
            </div>
        </div>
        <h1 className=' font-semibold  text-lg'> {props.name} </h1>
        <h1 className=' font-semibold text-lg text-amber-600  '> {props.price} </h1>
    </div>
  )
}

export default Friutcart;