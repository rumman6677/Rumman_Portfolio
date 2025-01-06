import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineAppstore, AiOutlineArrowRight } from 'react-icons/ai';
import { SiXdadevelopers } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { DiJavascript1 } from 'react-icons/di';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

const WhatIDo = () => {


    useEffect(() =>{
        AOS.init();
    }, [])

    return (
        <div className="max-w-[1340px] mx-auto mt-28 mb-24 px-3 cursor-pointer">
            <h1 className="text-[#FF024F] font-light text-center">FEATURES</h1>
            <p className="text-4xl my-6 text-center text-gray-200 font-black">What I Do</p>

            {/* first card */}
            <div className="grid md:grid-cols-3 gap-8">
                <Fade cascade direction='left'>
                    <div className="text-gray-400 p-8 scale-95 hover:scale-100 ease-in duration-300 rounded-md hover:shadow-slate-400 hover:shadow-inner hover:rounded-md shadow-md shadow-gray-900">
                        <span className="text-4xl text-[#FF024F]"><GiHamburgerMenu /></span>
                        <div className="mt-3 mb-6 ">
                            <h1 className="text-2xl text-gray-200 font-bold mb-3">Buisness Stratagy</h1>
                            <p>Develop a customer-centric approach, leverage technology, and foster innovation to achieve sustainable growth and competitive advantage.</p>
                        </div>
                        <Link to="/buisness"><span className="text-4xl cursor-pointer text-[#FF024F] mt-3"><AiOutlineArrowRight /></span></Link>
                    </div>
                </Fade>

                {/* second card */}
                <div className="text-gray-400 p-8 scale-95 hover:scale-100 ease-in duration-300 rounded-md hover:shadow-slate-400 hover:shadow-inner hover:rounded-md shadow-md shadow-gray-900">
                    <span className="text-4xl text-[#FF024F]"><SiXdadevelopers /></span>
                    <div className="mt-3 mb-6 ">
                        <h1 className="text-2xl text-gray-200 font-bold mb-3">Web Development</h1>
                        <p>Create responsive, user-friendly websites with optimized performance, intuitive navigation, and seamless integration for a superior online.</p>
                    </div>
                    <Link to="/development"><span className="text-4xl cursor-pointer text-[#FF024F] mt-3"><AiOutlineArrowRight /></span></Link>
                </div>

                {/* third card */}
                <Fade cascade direction='right'>
                    <div className="text-gray-400 p-8 scale-95 hover:scale-100 ease-in duration-300 rounded-md hover:shadow-slate-400 hover:shadow-inner hover:rounded-md shadow-md shadow-gray-900">
                        <span className="text-4xl text-[#FF024F]"><GrReactjs /></span>
                        <div className="mt-3 mb-6 ">
                            <h1 className="text-2xl text-gray-200 font-bold mb-3">React Development</h1>
                            <p>Utilize React's component-based architecture, state management, and reusable UI elements to build efficient, scalable web applications.</p>
                        </div>
                        <Link to="/react-dev"><span className="text-4xl cursor-pointer text-[#FF024F] mt-3"><AiOutlineArrowRight /></span></Link>
                    </div>
                </Fade>

                {/* four card */}
                <Fade cascade direction='left'>
                    <div className="text-gray-400 p-8 scale-95 hover:scale-100 ease-in duration-300 rounded-md hover:shadow-slate-400 hover:shadow-inner hover:rounded-md shadow-md shadow-gray-900">
                        <span className="text-4xl text-[#FF024F]"><AiOutlineAppstore /></span>
                        <div className="mt-3 mb-6 ">
                            <h1 className="text-2xl text-gray-200 font-bold mb-3">App Development</h1>
                            <p>Follow a user-centered design, agile development process, and rigorous testing to create high-quality, feature-rich mobile applications.</p>
                        </div>
                        <Link to="/app-dev"><span className="text-4xl cursor-pointer text-[#FF024F] mt-3"><AiOutlineArrowRight /></span></Link>
                    </div>
                </Fade>

                {/* five card */}
                <div className="text-gray-400 p-8 scale-95 hover:scale-100 ease-in duration-300 rounded-md hover:shadow-slate-400 hover:shadow-inner hover:rounded-md shadow-md shadow-gray-900">
                    <span className="text-4xl text-[#FF024F]"><BsFillPersonPlusFill /></span>
                    <div className="mt-3 mb-6 ">
                        <h1 className="text-2xl text-gray-200 font-bold mb-3">Personal Portfolio</h1>
                        <p>Craft a visually stunning and concise personal portfolio showcasing skills, projects, and achievements to impress potential employers.</p>
                    </div>
                    <Link to="parsonal"><span className="text-4xl cursor-pointer text-[#FF024F] mt-3"><AiOutlineArrowRight /></span></Link>
                </div>

                {/* six card */}
                <Fade cascade direction='right'>
                    <div className="text-gray-400 p-8 scale-95 hover:scale-100 ease-in duration-300 rounded-md hover:shadow-slate-400 hover:shadow-inner hover:rounded-md shadow-md shadow-gray-900">
                        <span className="text-4xl text-[#FF024F]"><DiJavascript1 /></span>
                        <div className="mt-3 mb-6 ">
                            <h1 className="text-2xl text-gray-200 font-bold mb-3">JavaScript</h1>
                            <p>JavaScript's versatility, event-driven programming, and extensive libraries to create interactive and dynamic web applications.</p>
                        </div>
                        <Link to="/java-script"><span className="text-4xl cursor-pointer text-[#FF024F] mt-3"><AiOutlineArrowRight /></span></Link>
                    </div>
                </Fade>
            </div>
            <hr className='mt-28 border-1 border-[#131619]' />
        </div>
    );
};

export default WhatIDo;