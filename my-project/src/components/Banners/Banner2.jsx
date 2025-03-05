import React from 'react';
import BannerPng from '../../assets/fruit-plate2.png'; // Update the import path to the correct relative path
import { motion } from 'framer-motion';
import { FadeUp } from '../../utility/animation';

const Banner2 = () => {
  return (
    <section className=''>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14
      md:py-24">
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Brand Info
            </motion.h1>

            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              This is the brand description or any other relevant information.
            </motion.p>
          </div>

          <motion.p
            variants={FadeUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our brand is dedicated to providing high-quality products with a
            focus on customer satisfaction.
          </motion.p>

          {/* Button Section */}
          <motion.div
            variants={FadeUp(1.1)}
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
      
      {/* Banner Image */}
      <div className="flex justify-center items-center">
        <motion.img
          initial={{ opacity: 0, x: 200, rotate: 75 }}
          whileInView={{ opacity: 1, x: 0 , rotate: 0 }}
          transition={{ duration:1, delay: 0.2 }}
          src={BannerPng}
          alt="Banner"
          className="w-[300px] md:max-w-[400px] h-full object-cover
          drop-shadow"
        />
      </div>
    </section>
  );
};

export default Banner2;
