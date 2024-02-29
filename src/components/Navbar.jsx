import React from 'react'
import { useState } from 'react';
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar bg-black">

            <Link to='/'><h1 className='text-[42px] font-bold text-white'>CoinVault</h1></Link>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-white`}>

                        <a href={`${nav.link}`}>{nav.title}</a>

                    </li>
                ))}
            </ul>

            {/* mobile view ki styling*/}

            <div className='sm:hidden flex flex-1 justify-end items-center'>

                <img src={toggle ? close : menu}
                    className="w-[28px] h-[28px]  object-contain cursor-pointer"
                    value={toggle}
                    onClick={() => setToggle((prev) => !prev)} />

                {/* displaying stuff inside the hamburger conditionally only if its open*/}

                <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

                    {/* ******************************************************************************************************************************************************************* */}



                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} text-white`}>

                                <a href={`#${nav.link}`}>{nav.title}</a>

                            </li>
                        ))}
                    </ul>


                </div>
            </div>

        </nav>
    )
}

export default Navbar