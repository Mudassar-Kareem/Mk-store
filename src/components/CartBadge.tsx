import React from 'react';

interface propsType {
  size: string;
}

const CartBadge: React.FC<propsType> = ({size}) => {
  return (
    <div className={`absolute text-[14px] bg-orange-500 text-white rounded-full ${size} -top-1 -right-3 grid place-items-center `}>1</div>
  )
}

export default CartBadge