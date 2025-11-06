import React, { useEffect, useState } from 'react'
import Footer from './Footer';

export default function Links() {

    const [linkvisibile, setlinkvisible] = useState(false);

    useEffect(()=>{
       const updateefectc=()=>{
         let w = window.innerWidth;
         if(w>1024){
            setlinkvisible(true);
         }
         else{
            setlinkvisible(false)
         }
        }

        updateefectc();
        window.addEventListener("resize", updateefectc)
        return ()=> window.removeEventListener("resize", updateefectc)
    },[])

  return (
    <div className='py-7 '>

        <div className='lg:hidden'>
            <div>
                <img className='w-full object-contain' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2024-07/1718624389849-Household-cleaning-essentials-KVI-slice-top.png"></img>
                <div className=' py-3' style={{backgroundColor:"rgba(60, 131, 253, 0.5)"}}>
                    <div className='flex gap-3 px-2 [&>*]:rounded-lg'>
                        <div className='rounded-lg'>
                            <img className='rounded-lg' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2024-07/1718624426915-Surface-Cleaners-Fresheners.png"></img>
                        </div>
                        <div className=''>
                            <img className='rounded-lg' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2024-07/1718624426915-Surface-Cleaners-Fresheners.png"></img>
                        </div>
                        <div className=''>
                            <img className='rounded-lg' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2024-07/1718624426915-Surface-Cleaners-Fresheners.png"></img>
                        </div>
                        <div className=''>
                            <img className='rounded-lg' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2024-07/1718624426915-Surface-Cleaners-Fresheners.png"></img>
                        </div>
                    </div>
                </div>
            </div>
           <div className=''>
             <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/layout-engine/v2/2024-12/app_footer_android/light.png"></img>
           </div>
           <button className='mb-15 h-10 items-center w-[95%] mx-auto flex justify-between' onClick={()=>setlinkvisible(!linkvisibile)}>india'a last minute app - blinkit
            {linkvisibile?<i className="fi fi-br-minus"></i>:<i className="fi fi-br-plus"></i>}
           </button>
        </div>

        {
            linkvisibile?
            <div className='flex flex-col lg:flex-row gap-5 w-[95%] lg:w-[80%] pb-5 mx-auto'>
        <div className='w-100% lg:w-[30%]'>
            <div><h1 className='my-4 text-[20px] font-semibold'>Useful Links</h1></div>
            <div className='flex justify-between text-[10px] md:text-[13px] lg:text-[15px]' style={{color:"#666666"}}>
                <div className='flex flex-col [&>*]:my-1'>
                    <span>Blog</span>
                    <span>Privacy</span>
                    <span>Terms</span>
                    <span>FAQs</span>
                    <span>Security</span>
                    <span>Contact</span>
                </div>
                <div className='flex flex-col [&>*]:my-1'>
                    <span>Partner</span>
                    <span>Franchise</span>
                    <span>Seller</span>
                    <span>Warehouse</span>
                    <span>Deliver</span>
                    <span>Resources</span>
                </div>
                <div className='flex flex-col [&>*]:my-1'>
                    <span>Recipes</span>
                    <span>Bistro</span>
                    <span>District</span>
                </div>
            </div>
           
        </div>
        <div className='w-100% lg:w-[70%]'>
            <div className='flex gap-4 px-0 lg:px-10'>
                <h1 className='my-4 text-[20px] font-semibold'>Categories</h1>
                <button className='text-[18px] text-green-600'>see all</button>
            </div>
            <div className='flex gap-10 py-5 lg:py-0 px-0 lg:px-10 justify-between my-4 text-[10px] md:text-[13px] lg:text-[15px]' style={{color:"#666666"}}>
                <div className='flex flex-col [&>*]:my-1'>
                    <span>Vegetables & Fruits</span>
                    <span>Cold Drinks & Juices</span>
                    <span>Bakery & Biscuits</span>
                    <span>Dry Fruits, Masala & Oil</span>
                    <span>Paan Corner</span>
                    <span>Pharma & Wellness</span>
                    <span>Personal Care</span>
                    <span>Magazines</span>
                    <span>Electronics & Electricals</span>
                    <span>Print Store</span>
                </div>
                <div className='flex flex-col [&>*]:my-1'>
                    <span>Dairy & Breakfast</span>
                    <span>Instant & Frozen Food</span>
                    <span>Sweet Tooth</span>
                    <span>Sauces & Spreads</span>
                    <span>Organic & Premium</span>
                    <span>Cleaning Essentials</span>
                    <span>Pet Care</span>
                    <span>Kitchen & Dining</span>
                    <span>Stationery Needs</span>
                    <span>E-Gift Cards</span>
                </div>
                <div className='flex flex-col [&>*]:my-1'>
                    <span>Munchies</span>
                    <span>Tea, Coffee & Milk Drinks</span>
                    <span>Atta, Rice & Dal</span>
                    <span>Chicken, Meat & Fish</span>
                    <span>Baby Care</span>
                    <span>Home Furnishing & Decor</span>
                    <span>Beauty & Cosmetics</span>
                    <span>Fashion & Accessories</span>
                    <span>Toys & Games</span>
                    <span>Rakhi Gifts</span>
                </div>
            </div>
        </div>




      </div>
      :""
        }
        {
            linkvisibile?
            <Footer/>
            :""
        }
    </div>
  )
}
