import React from 'react'
import image1 from '../assets/image1.avif'
import { LuLeafyGreen } from 'react-icons/lu'
import { GiChickenOven } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { AddItem } from '../redux/cartSlice'
import { toast } from 'react-toastify'

function Card({name, image, id, price, type}) {
  const dispatch=useDispatch()
  return (
    <div className='w-[250px] h-[330px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300'>
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
            <img src={image} alt="" className='object-cover'/>
        </div>
        <div className='text-xl font-semibold'>{name}</div>
        <div className='w-full flex justify-between items-center'>
            <div className='text-green-500 font-bold text-base'>Rs. {price}/</div>
            <div className='flex justify-center items-center gap-[8px] text-green-500 text-base font-bold'>{type==='veg'? <LuLeafyGreen/>: <GiChickenOven/>}<span>{type}</span></div>
        </div>
        <button className='w-full p-4 bg-green-500 rounded-lg text-white hover:bg-green-400 transition-all' onClick={()=> {dispatch(AddItem({id:id, name:name, price:price, image:image, qty:1}));
        toast.success("item added successfully")}
      }>Add to dish</button>
    </div>
  )
}

export default Card