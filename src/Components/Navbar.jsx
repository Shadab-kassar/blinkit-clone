import React, { useEffect, useState } from 'react'
import Cart from './Cart';
import logo from '../images/logo.png'
import { useSelector,useDispatch } from 'react-redux';
import { carton } from '../redux/slice';

export default function Navbar() {

  let dispatch = useDispatch();

  const [cartshow,setcartshow] = useState(0);
  const cartvisility = useSelector(state => state.cart.cartvisible);


  let text= "Vidya bhawan, Ukarra Rd, Sainik Nagar, Agra, Uttar Pradesh 282001, India...."

  return (

    <div className='bg-white border-b border-gray-200 z-15 fixed w-full top-0'>
      {
        cartvisility?
        <div className='duration-300'>
          <Cart/>
        </div>
        :""
      }
      <div className='mx-auto flex flex-col lg:flex-row'>
        <div className='hidden lg:block px-3 w-45 h-20 flex items-center px-8'>
          <img className='mt-5' src={logo}></img>
        </div>
        <div className=' flex px-5 lg:px-10 items-center'>
          <div className='flex justify-between items-center w-[100%]'>
              <div className='flex items-center '>
                <div className=' text-[12px] lg:text-[20px]'>
                    <h1 className='font-bold' >Delivery in 16 minutes</h1>
                    <p className='text-[10px] md:text-[14px]'>{text.slice(0,30)}...</p>
                </div>
                <div className=' text-end flex mt-6'>
                  <i className="traingle-cls text-[12px] fi fi-ss-triangle"></i>
                </div>

              </div>
                <div className='lg:hidden  w-5 h-10 me-5'>
                  <i className=" fi fi-rr-circle-user text-4xl"></i>
                </div>
          </div>
        </div>

        <div className=' my-3 lg:my-0 lg:w-[35%] xl:w-[45%] flex items-center item-center'>
          <div className='bg-gray-100 w-[95%] flex items-center mx-auto rounded-xl'>
            <i className="ms-3 fi fi-rr-search text-xl"></i>
            <input className='m-1 w-full h-10 px-2' type='text' ></input>
          </div>
        </div>

        <div className=' flex border-blue-500 lg:w-[22%] w-[95%] mx-auto'>

          <div className='hidden lg:inline  w-[100%] lg:w-[50%] text-center py-5 flex items-center'>
            <a className='text-[18px] mx-auto text-gray-800' >Login</a>
          </div>

          <div className=' fixed lg:static bottom-0 w-[95%] lg:w-[50%] flex text-items'>
            <button onClick={()=>{dispatch(carton())}} className='mx-auto shadow-xl bg-green-700 text-white h-[45px] lg:h-[auto] left-[3%] lg:static w-[95%] lg:w-[100%] xl:w-[70%] border border-green-800 rounded-lg my-3'><i className="fi fi-bs-cart-shopping-fast"></i>Cart</button>
          </div>
        </div>


      </div>
      
    </div>
    
  )
}
