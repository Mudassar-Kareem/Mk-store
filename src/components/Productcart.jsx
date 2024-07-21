import React from 'react'

function Productcart(props) {
  return (
    <div className='   flex justify-between px-3 py-4 rounded-lg    bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ' >
        <div className=' flex flex-col space-y-2 '>
            <span className=' font-semibold'> {props.name} </span>
            <span className=' font-normal text-gray-500'> {props.number} </span>
        </div>
        <img src={props.img} alt=""  className=' w-16 ' />
    </div>
  )
}

export default Productcart;