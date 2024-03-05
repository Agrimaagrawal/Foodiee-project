import React from 'react';

const Card = ({ imgurl, name, price }) => {
  return (
    <div className='w-[200px] h-auto bg-orange-400 ml-8 p-4 rounded-md'>
    <img src={imgurl} className='w-[200px] h-[150px]'></img>
    <div className="text-lg p-2">{name}</div>
    <div className='pl-2'>Rs.{price}</div>
    <button className='p-2 bg-white text-black w-full mt-4'>Add to cart</button>


  </div>
  );
};

export default Card;
