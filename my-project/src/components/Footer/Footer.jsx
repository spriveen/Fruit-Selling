import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from 'react-icons/fa'
import {motion} from 'framer-motion';


const Footer = () => {
  return <footer className='bg-red-200/10  py-12 mt-12 '>
    <motion.div
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     transition={{duration: 1, delay: 0.2}}   
    className='container flex justify-between items-center'>
   {/* Logo Section */}
    <div className='text-2xl flex items-center gap-2 
    font-bold uppercase'>
         <p className='text-red-300'>Fruit</p> 
        <p className='text-red-400'>Store</p>
        <FaLeaf className='text-green-500' />
        </div>
    {/* Social Section  */}
    <div className='text-3xl flex ites-center gap-4 mt-6
    text-gray-700'>
        <FaInstagram/>
        <FaFacebook/>
        <FaTwitter/>
        </div>
    </motion.div>

     {/* Creator Section */}
     <h1 className=' text-gray-900 text-center text-lg font-semibold mt-6'>Create By Riveen_Official</h1>
  </footer>
  
}

export default Footer