import React, { useState } from 'react';
import {Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import './Header.css'

const Header = () => {
    let Links = [
        { name: 'Recedencies', Links: '/recedencies' },
        { name: 'Our Value', Links: '/' },
        { name: 'Contact Us', Links: '/' },
        { name: 'Get Started', Links: '/' },

    ]
    let [open, setOpen] = useState(false);
    return (


        <div className='shadow-md  w-full top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 '>

                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    {/* <BeakerIcon className="h-6 w-6 text-blue-600" /> */}
                    <img className='w-13 h-12' src="./logo.png" alt="logo" />
                </div>
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor- md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7 font-semibold cursor-pointer'>
                                <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                            </li>))
                    }
                    <button className=' button1 bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Contact</button>
                </ul>
                
            </div>
        </div>


    );
};

export default Header;
