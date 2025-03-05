import React from 'react'
import {IoBagHandleOutline} from 'react-icons/io5'
import HeroPng from "../../assets/fruit-plate.png"
import LeafPng from "../../assets/leaf.png"

const Hero = () => {
  return <section>
    <div className='container grid grid-cols-1
    md:grid--cols-2 min-h-[650px] relative'>
     {/* Brand Info */}
     <div className='flex flex-col justify-center py-14
     md:py-0 relative z-10'>
        <div className='text-center md:text-left 
        space-y-6 lg:max-w-[400px]'>
           <h1 className='text-5xl lg:text-6xl
           font-bold leading-relaxed xl:leading-loose font-poppins'>
            Healthy
            <br/> 
           Fresh <span
           className='text-red-500' >Fruits</span>
           </h1>
           <p className='text-2xl tracking-wide'>Order Now For Fresh Healthy Life</p>
           <p className='text-gray-400'>
            Healthy And yummy food for fresh morning
            breakfast. Eat Daily for
            good health and mind Order nowand get 20%
            off on your first order
           </p>
           {/* button section */}
           <div className='flex justify-center 
           md:justify-start '>
            <button className='bg-emerald-400
            flex items-center gap-2'>
                <span>
                   <IoBagHandleOutline /> 
                </span>
            Order Now</button>
           </div>
        </div>
     </div>
     {/* Hero Images */}
     <div className='flex justify-center items-center'>
        <img 
        src={HeroPng}
       alt=""
       className='w-[350px]
        md:w-[550px] drop-shadow'
        />
     </div>
     {/* Leaf Image */}
     <div className='absolute top-14 md:op-0 right-1/2
        blur-sm opacity-80 rotate-[40deg]'>
        <img src={LeafPng} alt="" className='w-full md:max-w-[300px]' />
     </div>
    </div>
    </section>
  
}

export default Hero