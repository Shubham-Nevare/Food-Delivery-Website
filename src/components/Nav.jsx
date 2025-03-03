import React, { useContext, useEffect } from 'react'
import {MdFastfood} from "react-icons/md";
import { IoSearch } from 'react-icons/io5';
import { LuShoppingBag } from 'react-icons/lu';
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

function Nav() {
  const {input, setInput, cate, setCate, showCart, setShowCart} = useContext(dataContext)
  useEffect(()=>{
    const newList = food_items.filter((item)=> item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
    setCate(newList)
  },[input])

  const items = useSelector(state=> state.cart)
  console.log(items);
  
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-4 md:8px'>
        <div className='w-[50px] h-[50px] bg-white flex justify-center items-center rounded-md shadow-xl'>
            <MdFastfood className='w-[25px] h-[25px] text-green-500'/>
        </div>
        <form action="" className='w-[45%] h-[50px] bg-white flex items-center px-5 gap-[20px] rounded-md shadow-xl md:w-[70%]' onSubmit={(e)=>e.preventDefault}>
            <IoSearch className='w-[25px] h-[25px] text-green-500'/>
            <input type='text' placeholder='Search for food' className='w-[100%] outline-none text-[14px] md:text-[18px]' onChange={(e)=>setInput(e.target.value)} value={input}/>
        </form>
        <div className='w-[50px] h-[50px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={()=>{
          setShowCart(true);
        }}>
            <span className='absolute top-0 right-2 text-green-500 font-bold text-[14px]'>{items.length}</span>
            <LuShoppingBag className='w-[25px] h-[25px] text-green-500'/>
        </div>
    </div>
  )
}

export default Nav