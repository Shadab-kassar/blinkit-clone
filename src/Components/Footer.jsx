import React from 'react'

export default function Footer() {

  return (
    <div>
    <div className='w-[100%] lg:w-[80%] xl:w-[80%] mx-auto mt-2 bg-gray-100 '>
      <div className='w-[100%] mx-auto flex flex-col lg:flex-row justify-center my-5 items-center'>

        <div className='ps-5'>
            <p className='text-[12px]'>© Blink Commerce Private Limited, 2016-2025</p>
        </div>
        
        <div className='flex flex-col lg:flex-row mx-auto w-[95%]  xl:w-[70%] me-1 justify-start'>

            <div className='flex flex-col mt-4 lg:flex-row lg:gap-2 xl:gap-5 mx-auto w-[90%] lg:w-[50%] items-center justify-end mb-3'>
                <p className=''>Download App</p>
                <div className='flex mt-3 lg:mt-0 gap-5'>
                    <img className=' w-[50%] h-8' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"></img>
                    <img className=' w-[50%] h-8' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"></img>
                </div>
            </div>

            <div className=' flex flex-wrap my-4 py-2 mx-auto w-[90%] lg:w-[50%] [&>*]:border [&>*]:mx-2 justify-center lg:justify-evenly'>
                <div className=' flex items-center px-3 py-2 rounded-full bg-black text-white'>
                    <i className="fi fi-brands-facebook text-xl"></i>
                </div>
                <div className='flex items-center px-3 py-2 rounded-full bg-black text-white'>
                    <i className="fi fi-brands-twitter-alt text-xl"></i>
                </div>
                <div className='flex items-center px-3 py-2 rounded-full bg-black text-white'>
                    <i className="fi fi-brands-instagram text-xl"></i>
                </div>
                <div className='flex items-center px-3 py-2 rounded-full bg-black text-white'>
                    <i className="fi fi-brands-linkedin text-xl"></i>
                </div>
                <div className='flex items-center px-3 py-2 rounded-full bg-black text-white'>
                    <i className="fi fi-ss-at text-xl"></i>
                </div>
            </div>
        </div>

        

      </div>

      
    </div>
      <div className='mt-1 pb-30 w-[95%] lg:w-[80%] lg:pb-5 mx-auto'>
        <p className='text-[15px]'>“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
    </div>
    
    </div>
  )
}
