import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify'


function Home() {
  const { cate, setCate, input, showCart, setShowCart } =
    useContext(dataContext);
  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      const newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }

  const items = useSelector((state) => state.cart);

  const subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const deliveryFee = 20;
  const taxes = (subtotal * 0.5) / 100;
  const total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />

      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-6 w-[100%]">
          {categories.map((item) => {
            return (
              <div
                className="gap-4 w-[110px] h-[120px] bg-white flex flex-col items-start p-3 justify-start text-[16px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200"
                onClick={() => filter(item.name)}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap gap-5 px-5 pt-8 pb-8 justify-center items-center">
        {cate.length>0?cate.map((item) => (
          <Card
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        )): 
        <div className="text-center text-2xl text-green-500 font-semibold pt-5">no dish found</div>}
        
      </div>
      <div
        className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all flex flex-col items-center overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-green-400 text-[18px] font-semibold">
            Order item
          </span>
          <RxCross2
            className="text-green-400 w-[30px] h-[30px] text-[18px] font-semibold cursor-pointer hover:text-gray-600"
            onClick={() => setShowCart(false)}
          />
        </header>
        {items.length > 0? <>
          <div className="w-full mt-9 flex flex-col gap-8 ">
            {items.map((item) => (
              <Card2
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                qty={item.qty}
              />
            ))}
          </div>
          <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8">
            <div className="w-full flex justify-between items-center">
              <span className="text-base text-gray-600 font-semibold">
                Subtotal
              </span>
              <span className="text-green-400 font-semibold text-base">
                Rs {subtotal}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-base text-gray-600 font-semibold">
                Delivery Fee
              </span>
              <span className="text-green-400 font-semibold text-base">
                Rs {deliveryFee}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-base text-gray-600 font-semibold">Taxes</span>
              <span className="text-green-400 font-semibold text-base">
                Rs {taxes}/-
              </span>
            </div>
          </div>
          <div className="w-full flex justify-between items-center p-9">
            <span className="text-xl text-gray-600 font-semibold">Total</span>
            <span className="text-green-400 font-semibold text-xl">
              Rs {total}/-
            </span>
          </div>
          <button className="w-[80%] p-4 bg-green-500 rounded-lg text-white hover:bg-green-400 transition-all" onClick={()=>{
            toast.success("Order Placed..");
          }}>
            Place Order
          </button>
        </> : 
        <div className="text-center text-2xl text-green-500 font-semibold pt-5">
          Empty Cart
        </div>
        }
        
      </div>
    </div>
  );
}

export default Home;
