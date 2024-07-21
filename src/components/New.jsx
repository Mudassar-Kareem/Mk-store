import React from 'react';
import post1 from "../assets/img/post1.webp";
import post2 from "../assets/img/post2.webp";
import post3 from "../assets/img/post3.webp";
function New() {
  return (
    <div className=' p-5 md:px-32 5px mb-16'>
        <div className=' flex flex-col space-y-2 mb-4'>
            <h1 className=' font-semibold text-3xl '> Latest News</h1>
            <span className=' text-slate-600'> Present posts in a best way to highlight interesting moments of your blog.</span>
        </div>
        <div className="grid lg:grid-cols-3 gap-5  ">
            <div className=' space-y-3'>
                <img className=' rounded-lg mb-5 hover:scale-105' src={post1} alt="" />
                <span className=' font-medium text-lg text-amber-600'>Aug 2, 2023 / 8 Comments</span>
                <h1 className=' font-semibold text-2xl'>Healthy Food Healthy Life</h1>
            </div>
            <div className=' space-y-3'>
                <img className=' rounded-lg mb-5 hover:scale-105' src={post2} alt="" />
                <span className=' font-medium text-lg text-amber-600'>Aug 20, 2023 / 81 Comments</span>
                <h1 className=' font-semibold text-2xl'>Healthy Food Healthy Life</h1>
            </div>
            <div className=' space-y-3'>
                <img className=' rounded-lg mb-5 hover:scale-105' src={post3} alt="" />
                <span className=' font-medium text-lg text-amber-600'>Aug 27, 2023 / 18 Comments</span>
                <h1 className=' font-semibold text-2xl'>Healthy Food Healthy Life</h1>
            </div>


        </div>
    </div>
  )
}

export default New;