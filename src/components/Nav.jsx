import React, { useContext, useEffect } from 'react'
import {MdFastfood} from "react-icons/md";
import { IoSearch } from 'react-icons/io5';
import { LuShoppingBag } from 'react-icons/lu';
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';

function Nav() {
  const {input, setInput, cate, setCate} = useContext(dataContext)
  useEffect(()=>{
    const newList = food_items.filter((item)=> item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
    setCate(newList)
  },[input])
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px8'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
            <MdFastfood className='w-[30px] h-[30px] text-green-500'/>
        </div>
        <form action="" className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-[20px] rounded-md shadow-xl md:w-[70%]' onSubmit={(e)=>e.preventDefault}>
            <IoSearch className='w-[30px] h-[30px] text-green-500'/>
            <input type='text' placeholder='Search for food' className='w-[100%] outline-none text-[16px] md:text-[20px]' onChange={(e)=>setInput(e.target.value)} value={input}/>
        </form>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative'>
            <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>0</span>
            <LuShoppingBag className='w-[30px] h-[30px] text-green-500'/>
        </div>
    </div>
  )
}

export default Nav