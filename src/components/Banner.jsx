import React from 'react';
import ban1 from "../assets/img/banner1.webp";
import ban2 from "../assets/img/banner2.webp";

function Banner() {
  return (
    <div className=' p-5 md:px-32 px-5'>
        <div className=' lg:flex  justify-between gap-10   '>
            <div>
                <img className=' mb-5 hover:scale-105 transition-transform rounded-lg' src={ban1} alt="" />
            </div>
            <div>
                <img className=' hover:scale-105 transition-transform rounded-lg' src={ban2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner;