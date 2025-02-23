import React from 'react'
import image1 from '../assets/image1.avif'
import { LuLeafyGreen } from 'react-icons/lu'
import { GiChickenOven } from 'react-icons/gi'

function Card({name, image, id, price, type}) {
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300'>
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
            <img src={image} alt="" className='object-cover'/>
        </div>
        <div className='text-2xl font-semibold'>{name}</div>
        <div className='w-full flex justify-between items-center'>
            <div className='text-green-500 font-bold text-lg'>Rs. {price}/</div>
            <div className='flex justify-center items-center gap-[8px] text-green-500 text-lg font-bold'>{type==='veg'? <LuLeafyGreen/>: <GiChickenOven/>}<span>{type}</span></div>
        </div>
        <button className='w-full p-4 bg-green-500 rounded-lg text-white hover:bg-green-400 transition-all'>Add to dish</button>
    </div>
  )
}

export default Card