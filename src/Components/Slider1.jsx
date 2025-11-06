import React, { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector,useDispatch } from 'react-redux';
import { addItems, addQuantity, removeItems, subtractQuantity } from '../redux/slice';

export default function Slider1(props) {

  const sliderRef = useRef(null);
  const dispatch = useDispatch();

  let cartdata = useSelector((state)=>state.cart.items);

  const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6.4, // default
  slidesToScroll: 6.4,
  responsive: [
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3.2,
        slidesToScroll: 3.2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2.5
      }
    }
  ]
}

  const quantitiesById = useSelector(state => {
    const map = {};
    state.cart.items.forEach(ci => { map[ci.id] = ci.quantity; });
    return map;
  });
 
  return (
    <div>
      <div className='w-[90%] lg:w-[84%] mx-auto py-5'>
        <div className='mb-3'>
          <h1 className='text-[15px] md:text-[28px] font-semibold'>{props.heading}</h1>
        </div>

        <div className='flex'>
          <div className=' relative'>
            <button onClick={() => sliderRef.current.slickPrev()} className="px-3 py-1 border rounded shadow-2xl z-13 absolute top-[47%] bg-white rounded-full hover:bg-gray-200">&lt;</button>
          </div>
          <div className=' w-[100%] '>
            <Slider ref={sliderRef} {...settings} >
            {
                props.data.map((item,i)=>{
                  const quantity = quantitiesById[item.id] || 1;
                  const isInCart = cartdata.some(data => data.id === item.id);
                  return (
                  <div key={i} className='border border-gray-200 h-60 lg:h-72 rounded lg:rounded-md shadow-md px-1 h-full'> 
                    <div className=' h-[35%]'>
                        <img className='w-full h-full object-contain' src={item.src}></img>
                    </div>

                    <div className=' flex flex-col justify-between px-0 lg:px-3 text-[8px] lg:text-[14px] text-[5px] h-[60%]'>

                        <div className=''>
                            <div className='bg-gray-200 my-2 flex justify-start items-center font-semibold px-1 w-[50px] rounded'>
                                <i className="text-[8px] fi fi-br-stopwatch mt-1"></i> 
                                <p className='px-1 text-[10px] text-black '>{item.time}</p>
                            </div>
                            <h1 className='font-medium my-2' >{(item.title).length>=25?(item.title).slice(0,40):item.title}</h1>
                        </div>

                        <div className='mb-2'>
                            <h1 className='mt-2 text-gray-500 text-[13px]' >500ml</h1>
                            <div className=' w-[100%] flex justify-between items-center flex-col lg:flex-row'>
                                <span className='font-bold text-[15px]'>{item.price}</span>
                                {
                                  cartdata.find((data)=> data.id == item.id )?
                                    <button className='border text-green-800 font-semibold w-[70%] lg:w-[45%] py-1 rounded border-green-800 bg-green-50 px-1'>
                                    <div className='flex justify-between items-center'>
                                      <i onClick={()=>dispatch(quantity <=1?removeItems(item.id): subtractQuantity({id:item.id}))} className="text-[12px] fi fi-br-minus"></i>
                                      <h1 className='text-[15px]'> {quantity}</h1>
                                      <i onClick={()=>{dispatch(addQuantity({id:item.id}))}}  className="text-[12px] fi fi-br-plus"></i>
                                    </div>
                                    </button>
                                    :
                                    <button onClick={()=>dispatch(addItems(item))} className='border text-green-800 font-semibold w-[70%] lg:w-[45%] py-1 rounded border-green-800 bg-green-50 px-1'>
                                    <div className='flex justify-between items-center'>
                                      <h1 className=' mx-auto text-[15px]'>Add</h1>
                                    </div>
                                    </button>
                                }
                                
                            </div>
                        </div>

                    </div>
                  </div> )
              })
            }
            </Slider>
          </div>
          <div className=' relative'>
            <button onClick={() => sliderRef.current.slickNext()} className="px-3 py-1 border rounded shadow-2xl z-13 absolute -left-8 top-[47%] bg-white rounded-full hover:bg-gray-200"> &gt;</button>
          </div>
            
        </div>
      </div>
    </div>
  )
}


<div className="flex gap-2">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200"
            >
              Prev
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200"
            >
              Next
            </button>
          </div>