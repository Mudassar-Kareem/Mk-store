import React from 'react';
import cat1 from "../assets/img/category1.webp";
import cat2 from "../assets/img/category2.webp";
import cat3 from "../assets/img/category3.webp";
import cat4 from "../assets/img/category4.webp";
import cat5 from "../assets/img/category5.webp";
import cat6 from "../assets/img/category6.webp";
import cat7 from "../assets/img/category7.webp";
import cat8 from "../assets/img/category8.webp";
import Productcart from './Productcart';

function Products() {
  return (
    <div className=' p-5 md:px-32 px-5'>
      <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 '>
        <div className='hover:scale-105'><Productcart name='Fresh Fruits' number='7 products' img={cat1}/></div>
        <div className='hover:scale-105'><Productcart name='Fresh vegs' number='8 products' img={cat1}/></div>
        <div className='hover:scale-105'><Productcart name='Canned Goods' number='9 products' img={cat1}/></div>
        <div className='hover:scale-105'><Productcart name='Bread & Bakery' number='5 products' img={cat1}/></div> 
        <div className='hover:scale-105'><Productcart name='Fishes' number='12 products' img={cat1}/></div> 
        <div className='hover:scale-105'><Productcart name='Eggs & Dairy' number='19 products' img={cat1}/></div> 
        <div className='hover:scale-105'><Productcart name='Soft Drinks' number='14 products' img={cat1}/></div> 
        <div className='hover:scale-105'><Productcart name='Fresh Friuts' number='15 products' img={cat1}/></div> 
      </div>
    </div>
  )
}

export default Products