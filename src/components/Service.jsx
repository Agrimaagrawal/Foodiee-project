import React from 'react'
import img1 from '../assets/easyorder.jpg'
import img2 from '../assets/fastdelivery.jpg'
import img3 from '../assets/bestquality.jpg'

const Service = () => {
  return (
    <div>
      <div className='flex-col justify-center items-center w-full h-auto'>
        <p className='text-[20px] text-orange-500 text-center'>WHAT WE SERVE</p>
        <div className='text-center text-[30px] font-extrabold'>Your Favorite Food <br/>Delivery Partner</div>
      </div>
      <div className='w-full md:flex justify-center items-center p-12 '>
        <div className='w-[500px] m-6 p-9 '>
            <img src={img1} />
            <p className='font-bold text-center'>Easy To Order</p>
            <p className='text-center'>You only need few steps to order</p>
        </div>
        <div className='w-[500px] m-6 p-9'>
            <img src={img2} />
            <p className='font-bold text-center'>Fastest Delivery</p>
            <p className='text-center'>Delivery that is always on-time even faster</p>
        </div>
        <div className='w-[500px] m-6 p-9'>
            <img src={img3} />
            <p className='font-bold text-center '>Best Quality</p>
            <p className='text-center'>Not only fast for us quality is also number one</p>
        </div>
      </div>

    </div>
  )
}

export default Service
