import React from 'react';
import { FaLeaf, FaShoppingCart } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';
import {motion } from 'framer-motion';

const NavbarMenu = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'Products', link: '#' },
    { id: 3, title: 'About', link: '#' },
    { id: 4, title: 'Shop', link: '#' },
    { id: 5, title: 'Contacts', link: '#' }
];

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <nav>
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.5}}
                className='container flex justify-between items-center py-4 md:pt-4'>
                    {/* Logo Section */}
                    <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                        <p className='text-red-300'>Fruit</p> 
                        <p className='text-red-400'>Store</p>
                        <FaLeaf className='text-green-500' />
                    </div>

                    {/* Menu Section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6 text-gray-700'>
                            {NavbarMenu.map((menu) => (
                                <li key={menu.id}>
                                    <a href={menu.link}
                                        className='inline-block py-1 px-3 hover:text-red-300 hover:shadow-[0_3px_0_-1px_#dc2626] font-semibold'
                                    >
                                        {menu.title}
                                    </a>
                                </li>
                            ))}
                            <button className='text-2xl hover:bg-red-400 text-white rounded-full p-2 duration-200'>
                                <FaShoppingCart className='text-2xl' />
                            </button>
                        </ul>
                    </div>

                    {/* Mobile Hamburger Menu Section */}
                    <div className='md:hidden' onClick={()=>
                        setOpen(!open)
                    }>
                        <button onClick={() => setOpen(!open)}>
                            <MdMenu className="text-4xl" />
                        </button>
                    </div>
                </motion.div>
            </nav>

            {/* Responsive Menu Section */}
            <ResponsiveMenu open={open} setOpen={setOpen} />
        </>
    );
}

export default Navbar;
