import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Large from './Components/Large'
import Slider1 from './Components/Slider1'
import Links from './Components/Links'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import { Freeze } from "react-freeze";

function App() {

  const data = [
  { id:1, time:"15min", title:"Amul Gold Full Cream Milk 1 ltr", price:69, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/628c97e0-5ed4-425d-a667-1d3bfa6f0bde.png"},
  
  { id:2, time:"15min", title:"Amul Salted Butter", price:59, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/613787ac-f983-4cfb-b534-e219c8d47b39.png"},
  
  { id:3, time:"15min", title:"Amul Taaza Toned Milk", price:29, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5734b087-3ad9-485f-bbe2-52079cd9e35d.png"},
  
  { id:4, time:"15min", title:"Amul Masti Pouch Curd", price:35, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3af56c86-9a93-4d0c-a8d5-cf38493e4120.png"},
  
  { id:5, time:"15min", title:"Amul Cheese Slices", price:72,  src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/731f3575-e115-435a-98ed-add09da0078f.png" },
  
  { id:6, time:"15min", title:"The Baker's Dozen Zero Maida Coconut Oats Cookies", price:158, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/59056bfd-0c52-4662-8d7c-d48a579c1133.png"},
  
  { id:7, time:"15min", title:"Bonn Zero Maida 100% Atta Whole Wheat Bread", price:50, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c15f05ac-7c43-4c8b-8afa-c784f09368c1.png"},
  
  { id:8, time:"15min", title:"English Oven Milk Bread", price:50, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9f363c60-8b58-4e1a-8c20-9647247b7227.png"},
  
  { id:9, time:"15min", title:"Amul Salted Butter (200 g)s", price:110, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/03af3633-5fa5-438f-bece-145ed114d279.png"},
  
  { id:10, time:"15min", title:"Bonn White Bread", price:45, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8ec51bde-93de-4f9f-a10f-adc908ff0b63.png"},
  
  { id:11, time:"15min", title:"Amul Cow Mil", price:30, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ae29e828-f5d9-4f8b-89b6-8c6d6919df7b.png"},
  
  { id:12, time:"15min", title:"Bonn Bombay Pav (12 slices)", price:55, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/98956481-33a5-4585-9fb7-3bb482f84a9f.png"},
  
  { id:13, time:"15min", title:"English Oven Fruit Bun", price:20, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f4418ade-78c5-4405-9973-02c6c6db3289.png"},
  
  { id:14, time:"15min", title:"Amul Salted Butter (Chiplets)",  price:75, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2d9a6244-1350-4879-83b5-651b78250f50.png"},
  
  { id:15, time:"15min", title:"Andaah Brown Eggs + Vita D", price:114, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c855ff81-ce3b-4686-a01e-d27fc0aa70b5.png"},
  
  ]

  const data2 = [
{ id:16, time:"15min", title:"Perfect Rolled Cones (Natural) - Bongchie", price:45, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/71ddb6c0-c8d8-47fb-80d6-e89bce9fd498.png"},

{ id:17, time:"15min", title:"Brown Ripper Rolling Paper 32 Leaves + 32", price:120, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/500d636d-e59e-4835-a0e5-3d8e7ad26d3b.png"},

{ id:18, time:"15min", title:"Ultimate Rolling Paper with Filter Tips & Crushing Tray (King", price:90, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0f8ebd88-7b67-4542-bda1-87f8182d767d.png"  },

{ id:19, time:"15min", title:"Brown Party Cone Rolling Paper by Stash Pro", price:80, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/29ba90c0-0b4c-4be8-97e7-3af58a7ff24d.png"  },

{ id:20, time:"15min", title:"Thins Pre-Rolled Rolling Paper By LIT", price:25, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8d385b40-e78b-434a-962d-50ba667891bf.png"  },

{ id:21, time:"15min", title:"Perfect Rolling Paper (Pink) - Bongchie", price:45, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e99f4bbf-e018-4c43-ae91-1ef6dfb6c91b.png"  },

{ id:22, time:"15min", title:"Ultimate Rolling Paper with Filter Tips & Crushing Tray (King Size, Bleached) - Mozo", price:80, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2a6eb6af-8143-4195-a788-c350255a8e1e.png"  },

{ id:23, time:"15min", title:"Brown Rolling Paper Cones - Stash Proo", price:90, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e9adf1c2-104e-4a39-a51f-c19a7db68e55.png"  },

{ id:24, time:"15min", title:"Super Slim Brown Rolling Paper by Stash Pro", price:55, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/90c1209b-2ee3-4699-b4d3-44021588e077.png"  },

{ id:25, time:"15min", title:"Thins Pre Rolled Cones by LIT", price:60, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a49df561-69d5-46bd-8474-ab472e81197b.png"  },

{ id:26, time:"15min", title:"Plastic Crusher SLIMJIM", price:200, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/41608362-a9d2-40ee-838c-3e3d8806f17e.png"  },

{ id:27, time:"15min", title:"Brown Rolling Paper (King Size) - Stash Pro", price:50, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5364507c-8f4b-4bcf-8663-eaedbc3f9fb6.png"  },

{ id:28, time:"15min", title:"Perforated Wide Tips Roach - Raw", price:48, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f53cbbd4-0a1f-4878-9de9-600f9549d725.png"  },

{ id:29, time:"15min", title:"Pop N Puff Rolling Paper (Assorted) by Bongchie", price:80, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7da25a66-a6dc-4e0e-8701-3c8c45147cff.png"  },

{ id:30, time:"15min", title:"Brown Classic Slim Rolling Paper (King Size) - Raw", price:76, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b19c782f-6895-4e5d-8b14-94cd38790b87.png"  },

]
  
const data3 = [
{ id:31, time:"15min", title:"Beanly Choco Hazelnut Spread with Breadsticks", price:98, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2a55bb8b-bf09-454b-9233-cc00404c6a5c.png"},

{ id:32, time:"15min", title:"Lo! Foods Gluten Free Millet Ragi Chips", price:99, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4a2d5e14-4425-4d2d-8958-6d51c6fd73d9.png"},

{ id:33, time:"15min", title:"Protein Chef Baked Coated Peanuts", price:69, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3eae3870-eb2a-43eb-ad30-967d17f7d691.png"},

{ id:34, time:"15min", title:"Pringles Original Potato Chips - Pack of 2", price:187, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/815e8dd5-37e9-4dc2-b3f7-ded08e12a7ab.png"},

{ id:35, time:"15min", title:"Kab's Jackpot Cheese Balls", price:160, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/fe70ea27-8ead-446d-be12-f8f8d45c4d0e.png"},

{ id:36, time:"15min", title:"Beanly Dark Chocolate Spread with Breadsticks", price:98, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bf324463-67d9-41ce-8888-bb5c7f3cb6aa.png"},

{ id:37, time:"15min", title:"Protein Chef Baked Bikaneri Bhujia Sev (Guilt Free Healthy Snacks Namkeen)", price:99, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c9db4298-29bf-4536-b5f3-06dadbd50130.png"},

{ id:38, time:"15min", title:"Kettle Studio Sharp Jalapenos & Cream", price:44, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/fc9d86ff-b9c1-4c55-b099-ef6f88d843d7.png"},

{ id:39, time:"15min", title:"Protein Chef Double Protein Soya Sticks - No", price:59, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5e52952d-3a98-48cb-b4e6-704b7dab94d7.png"},

{ id:40, time:"15min", title:"Kettle Studio Mature Cheddar & Red Onions", price:99, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f1db2e94-4325-4d3a-9bb3-23f73069f5fe.png"},

{ id:41, time:"15min", title:"Kettle Studio Crushed Peprika with Exotic", price:99, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/cc4df1f4-5624-436f-8903-301226281ebc.png"},

{ id:42, time:"15min", title:"Kab's Jackpot Fire Balls Snack", price:65, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ebadff31-2807-480d-92bb-f34f29b1bbd9.png"},

{ id:43, time:"15min", title:"Pringles Hot & Spicy Potato Chips", price:232, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2f46c85d-ab82-4b3d-aa7e-6cfe61ab3c7f.png"},

]



  return (
    <>
      <div className='App'>
        <Navbar/>
        <Freeze freexe={true} > <Large />  </Freeze> 
        <Slider1 heading={"Dairy, Bread & Eggs"} data={data}/>
        <Slider1 heading={"Rolling paper & tobacco"} data={data2}/>
        <Slider1 heading={"Snacks & Munchies"} data={data3}/>
        <Links/> 
      </div>
    </>
  )
}

export default App
