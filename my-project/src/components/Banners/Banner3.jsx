import React from 'react';
import BannerBg from '../../assets/banner-bg.jpg'; // Updated the image import
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';

const bgStyle ={
    backgroundImage: `url(${BannerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
}




const Banner3 = () => {
  return (
    <section className='container mb-12'>
      <div 
       style={bgStyle}
      className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14
      rounded-3xl">
        {/* Blank div */}
        <div></div>

        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
               {""}
            Get The Fresh Today
            </motion.h1>

            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              This is the brand description or any other relevant information.
            </motion.p>
          </div>

          

          {/* Button Section */}
          <motion.div
            variants={FadeLeft(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <button className="bg-emerald-400 px-4 py-2 rounded text-white">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
