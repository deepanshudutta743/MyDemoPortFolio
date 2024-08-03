import React from 'react'
import pic from "/photo.avif"
import { IoMenu } from "react-icons/io5";
import { GiCrossedAirFlows } from "react-icons/gi";
import { useState } from 'react';
import {Link} from "react-scroll"
function Navbar() {
    const [menu, setMenu] = useState(false)
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },
        {
            id: 4,
            text: "Experiance"
        },
        {
            id: 5,
            text: "Contact"
        },
    ];
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white'>
                <div className='flex justify-between h-16 items-center' >
                    <div className='flex items-center space-x-2'>
                        <img src={pic} className='h-12 w-12 rounded-full'></img>
                        <div>
                            <h1 className='font-semibold text-xl cursor-pointer'><span className='text-green-500 text-2xl'>D</span>eepanshu</h1>
                            <p>Web Developer</p>
                        </div>
                    </div>
                    {/* Desktop navbar */}
                    <div>
                        <ul className='hidden md:flex space-x-8'>
                            {/* // chote device mei hidden hei */}
                            {
                                navItems.map(({ id, text }) => (
                                    <li key={id} className='hover:scale-105 duration-200 cursor-pointer'>
                                        <Link to={text}
                                        smooth={true}
                                        duration={500}
                                        activeClass="active"
                                        >
                                        {text}
                                        </Link>
                                        </li>
                                ))
                            }

                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden'>
                            {
                                menu ? <IoMenu size={24} /> : <GiCrossedAirFlows size={24} />
                            }

                        </div>
                    </div>
                </div>
                {/* mobile navbar */}
                {
                    !menu && (
                        <div>
                            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl bg-white'>
                                {/* // medium and ussee bari device kelia hidden hei */}
                                {
                                navItems.map(({ id, text }) => (
                                    <li key={id} className='hover:scale-105 duration-200 font-semibold cursor-pointer'>

                                        <Link to={text}
                                        onClick={() => setMenu(!menu)}
                                        smooth={true}
                                        duration={500}
                                        activeClass="active"
                                        >
                                        {text}
                                        </Link>
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Navbar