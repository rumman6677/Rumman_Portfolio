import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/image/nav.jpg"
import { AiOutlineClose, AiOutlineDownload } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import resume from "../resume/Rumman_resume.pdf"

const NavBar = () => {

    const [toggle, setToggle] = useState()
    return (
        <div className="max-w-[1340px] mx-auto px-4">
            <div className="flex justify-between items-center py-3 text-gray-300 font-light">
                <div className="flex gap-2 items-center">
                    <Link to="/"><img className="w-16 cursor-pointer block mx-auto rounded-full border border-gray-700" src={logo} alt="" /></Link>
                    {/* <h1 className="text-3xl font-extralight text-[#FF024F]"><Link to="/">TOFAEL.</Link></h1> */}
                </div>

                <span className='md:hidden'>
                    {
                        toggle ? <AiOutlineClose className='text-2xl' onClick={() => setToggle(!toggle)} /> : <GiHamburgerMenu className="text-2xl" onClick={() => setToggle(!toggle)} />
                    }
                </span>
                <ul className={`flex items-center duration-300 flex-col py-5 md:p-0 text-white md:text-gray-200 bg-opacity-90 top-20 bg-black md:bg-transparent w-full text-center md:w-auto md:flex-row gap-2 absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                    <li className="hover:shadow-slate-400 hover:shadow-inner px-4 py-2 rounded-full duration-300 hover:text-[#FF024F]">
                        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>HOME</NavLink>
                    </li>
                    <li className="hover:shadow-slate-400 hover:shadow-inner px-4 py-2 rounded-full duration-300 hover:text-[#FF024F]">
                        <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>ABOUT</NavLink>
                    </li>
                    <li className="hover:shadow-slate-400 hover:shadow-inner px-4 py-2 rounded-full duration-300 hover:text-[#FF024F]">
                        <NavLink to="/portfolio" className={({isActive}) => isActive ? "active" : ""}>PROJECTS</NavLink>
                    </li>
                    <li className="hover:shadow-slate-400 hover:shadow-inner px-4 py-2 rounded-full duration-300 hover:text-[#FF024F]">
                        <NavLink to="/blog" className={({isActive}) => isActive ? "active" : ""}>BLOG</NavLink>
                    </li>
                    <li className="hover:shadow-slate-400 hover:shadow-inner px-4 py-2 rounded-full duration-300 hover:text-[#FF024F]">
                        <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>CONTACT</NavLink>
                    </li>
                    <li className="hover:shadow-slate-400 hover:shadow-inner px-4 border py-2 rounded-full duration-300 hover:text-[#FF024F]">
                    <button className="text-xl rounded scale-95 hover:scale-105 ease-in duration-300"><Link target="_blank" className='flex items-center gap-3' to={resume} download>Download <AiOutlineDownload className='text-2xl'/></Link></button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
