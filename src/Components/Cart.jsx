import React, { useEffect, useState } from 'react'
import { cartof,removeItems,addQuantity, subtractQuantity,} from '../redux/slice'
import { useDispatch,useSelector } from 'react-redux'

export default function Cart() {

    const dispatch = useDispatch();

    const cartvisbile = useSelector(state => state.cart.cartvisbile)

    const cartdata = useSelector(state => state.cart.items);

    const quantitiesById = useSelector(state => {
        const map = {};
        state.cart.items.forEach(ci => { map[ci.id] = ci.quantity; });
        return map;
      });

    const totalPrice=()=>{
        let price=0;
        cartdata.map((item)=>{
            price += item.quantity?item.quantity*item.price:item.price*1;
        })
        return price
    }


  return (
    <>
    {
        cartvisbile?"":
    <div className='flex x-17 justify-end z-14 absolute bg-black/75 w-full' >
      <div className='w-full opacity-5 bg-black h-58 lg:w-[70%]'></div>
      <div className=' bg-purple-100 rounded-b-xl pb-7 h-[150%] lg:w-[30%]'>
        <div className='flex justify-between p-4 bg-white shadow-md'>
            <h1 className='font-semibold'>My Cart</h1>
            <button onClick={()=>dispatch(cartof())} ><i className="fi fi-br-cross"></i></button>
        </div>
        <div className='border border-transparent m-3 rounded-xl bg-white shadow-xl'>
            <div className='flex p-4'>
                <div className='bg-gray-100 flex items-center pt-1 px-2 rounded-lg'>
                    <h1><i className="text-3xl fi fi-bs-stopwatch"></i></h1>
                </div>
                <div className='mx-3'>
                    <h1 className='font-bold' >Delivery in 14 minutes</h1>
                    <p className='text-[12px]' >Shipment of 2 items</p>
                </div>
            </div>
            <div className='border'>

            {
                !cartdata?"":
                cartdata.map((item,i)=>{
                const quantity = quantitiesById[item.id] || 1;
                const isInCart = cartdata.some(data => data.id === item.id);
                return <div key={i} className=' px-4 my-3 flex items-center'>
                <div className='border h-13 flex items-center rounded-lg'>
                    <img className='w-16 object-contain' src={item.src} alt="" />
                </div>

                <div className='flex w-[100%]'>
                    <div className='mx-3 w-[50%] '>
                        <h1 className='text-[12px]'>{item.title.length>20?item.title.slice(0,20):item.title}</h1>
                        <p className='text-[12px]'>500ml</p>
                        <p className='text-[12px] font-bold'><i className="text-[9px] ms-1 fi fi-br-indian-rupee-sign"></i>{item.price}</p>
                    </div>
                    <div className='w-[50%] flex justify-end items-end'>
                        <button className=' bg-green-600 text-white h-9 p-1 [&>*]:mx-2 rounded-md'>
                            <i onClick={()=>{dispatch(quantity <=1?removeItems(item.id) :subtractQuantity({id:item.id}))}} className="text-[12px] fi fi-br-minus"></i>
                            {quantity}
                            <i onClick={()=>{dispatch(addQuantity({id:item.id})) }}className="text-[12px] fi fi-br-plus"></i>
                            </button>
                    </div>
                </div>  
            </div>
                })
            }
            </div>
           

        </div>

        <div className='m-3 '>
            <div className='bg-white shadow-xl  rounded-xl'>
                <div className=' py-2 px-4'>
                <h1 className='font-semibold'>Bill Details</h1>
                <div className='flex justify-between my-1'>
                    <div className=' flex'>
                        <i className="fi fi-sr-memo-pad me-1"></i>
                        <h1>Items total</h1>    
                    </div>
                    <p className='text-[12px] font-bold'><i className="text-[9px] ms-1 fi fi-br-indian-rupee-sign"></i>{totalPrice()==1?0:totalPrice()}</p>
                </div>
                <div className='flex justify-between my-1'>
                    <div className=' flex'>
                        <i className="fi fi-ss-shipping-fast me-1"></i>
                        <h1>Delivery charge</h1>    
                    </div>
                    <p className='text-[12px] font-bold'><i className="text-[9px] ms-1 fi fi-br-indian-rupee-sign"></i>812</p>
                </div>
                <div className='flex justify-between my-1'>
                    <div className=' flex'>
                        <i className="fi fi-sr-shopping-bag me-1"></i>
                        <h1>Handling charge</h1>    
                    </div>
                    <p className='text-[12px] font-bold'><i className="text-[9px] ms-1 fi fi-br-indian-rupee-sign"></i>812</p>
                </div>

                <div className='flex justify-between'>
                    <h1>Grand total</h1>
                    <div className='flex items-center'>
                        <i className="text-[12px] mt-1 fi fi-br-indian-rupee-sign"></i>
                        <h1>814</h1>    
                    </div>
                </div>
            </div>

            <div className='flex shadow-xl font-bold text-blue-700 justify-between bg-blue-100 py-2 rounded-b-xl px-3'>
                <h1>You total savings</h1>
                <h1>51</h1>
            </div>


            </div>

            <div className='rounded-xl shadow-xl mt-3 mb-7 bg-white px-4 py-2'>
                <h1 className='font-bold'>Cancellation Policy</h1>
                <p className='text-[14px]'>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
            </div>
        </div>  

        <div className='absolute sticky shadow-xl bottom-0 border bg-white w-[90%] mx-auto'>
            <button className='w-[95%] bg-green-700 mx-auto rounded-xl my-2 px-4 py-2 flex justify-between items-center text-white font-semibold'>
                <div>
                    <h1><i className="text-[12px] mt-1 fi fi-br-indian-rupee-sign"></i>380</h1>
                    <p>Total</p>
                </div>
                <div>
                    <h1 className='me-2'>Login to Proceed<i className="mt-2 py-1 ms-1 fi fi-rs-angle-right"></i></h1>
                </div>
            </button>
        </div>
      </div>
    </div>
    }
    </>
  )
}
