import React from 'react';
// import profile from "../assets/image/"
import profile from '../assets/image/mypic.jpg'
import Typewriter from 'typewriter-effect';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { SiCss3 } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { Fade } from "react-awesome-reveal";



const Banner = () => {
    return (
        <div className="mt-22 px-3 mb-20">
            <div className="grid md:grid-cols-2 gap-20 max-w-[1340px] mx-auto mt-6">
                <div className='mt-24 rounded-lg'>
                    <Fade delay={700} direction="left">
                        <img className="shadow-lg w-full rounded-lg md:w-[520px] object-cover  scale-95 hover:scale-105 ease-in duration-300 hover:bg-[#26282d] items-center block mx-auto hover:shadow-white hover:shadow-inner hover:rounded-md shadow-black" src={profile} alt="" />
                    </Fade>
                </div>

                <div className='mt-20'>
                    <Fade delay={500} direction='top'>
                        <p className="font-light text-gray-200">WELCOME TO MY WORLD</p>
                        <h1 className="md:text-4xl my-4 text-2xl text-gray-200 tracking-widest font-black">Hi, I’m <span className="font-extrabold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-purple-300 to-[#FF024F]">Rumman Hasan</span></h1>
                        <p className="flex gap-2 md:text-5xl text-2xl font-black text-gray-200">a <span className="text-gray-200 duration-600 tracking-widest">
                            <Typewriter
                                options={{
                                    strings: ['Web Developer.', 'Professional Coder.', 'React Developer.', 'JS Developer.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></span></p>
                        <p className="mt-10 font-light text-gray-200 tracking-widest text-justify">This is Md. Rumman Hasan,
                            I’m a skilled Web Developer with Front-End Development and I always learn a new technology’s and want to be updated. I’m comfortable working alone and in groups. I have the ability and mindset to work in any environment. My work and my profession are most important to me. HAPPY CODING!</p>
                    </Fade>
                    <div className="mt-10">
                        <div>
                            <Fade delay={600} cascade direction="left"> <h1 className="text-lg font-light text-gray-200 mt-6">BEST SKILL ON</h1></Fade>
                            <Fade delay={700} direction="right">
                                <div className="grid md:grid-cols-5 grid-cols-2 gap-8 mt-6">
                                    <p className="text-6xl rounded-md text-gray-200 p-8 hover:bg-[#26282d] scale-95 hover:scale-105 ease-in duration-300 items-center block mx-auto hover:shadow-white hover:shadow-inner hover:rounded-md shadow-md shadow-black"><AiFillHtml5 /></p>
                                    <p className="text-6xl rounded-md text-gray-200 p-8 hover:bg-[#26282d] scale-95 hover:scale-105 ease-in duration-300 items-center block mx-auto hover:shadow-white hover:shadow-inner hover:rounded-md shadow-md shadow-black"><SiCss3 /></p>
                                    <p className="text-6xl rounded-md text-gray-200 p-8 hover:bg-[#26282d] scale-95 hover:scale-105 ease-in duration-300 items-center block mx-auto hover:shadow-white hover:shadow-inner hover:rounded-md shadow-md shadow-black"><FaBootstrap /></p>
                                    <p className="text-6xl rounded-md text-gray-200 p-8 hover:bg-[#26282d] scale-95 hover:scale-105 ease-in duration-300 items-center block mx-auto hover:shadow-white hover:shadow-inner hover:rounded-md shadow-md shadow-black"><SiTailwindcss /></p>
                                    <p className="text-6xl rounded-md text-gray-200 p-8 hover:bg-[#26282d] scale-95 hover:scale-105 ease-in duration-300 items-center block mx-auto hover:shadow-white hover:shadow-inner hover:rounded-md shadow-md shadow-black"><IoLogoJavascript /></p>
                                    <p className="text-6xl rounded-md text-gray-200 p-8 hover:bg-[#26282d] scale-95 hover:scale-105 ease-in duration-300 items-center block mx-auto hover:shadow-white hover:shadow-inner hover:rounded-md shadow-md shadow-black"><FaReact /></p>
                                    <p className="text-6xl rounded-md text-gray-200 p-8 hover:bg-[#26282d] scale-95 hover:scale-105 ease-in duration-300 items-center block mx-auto hover:shadow-white hover:shadow-inner hover:rounded-md shadow-md shadow-black"><SiExpress /></p>
                                    <p className="text-6xl rounded-md text-gray-200 p-8 hover:bg-[#26282d] scale-95 hover:scale-105 ease-in duration-300 items-center block mx-auto hover:shadow-white hover:shadow-inner hover:rounded-md shadow-md shadow-black"><SiMongodb /></p>
                                    <p className="text-6xl rounded-md text-gray-200 p-8 hover:bg-[#26282d] scale-95 hover:scale-105 ease-in duration-300 items-center block mx-auto hover:shadow-white hover:shadow-inner hover:rounded-md shadow-md shadow-black"><SiFirebase /></p>
                                    <p className="text-6xl rounded-md text-gray-200 p-8 hover:bg-[#26282d] scale-95 hover:scale-105 ease-in duration-300 items-center block mx-auto hover:shadow-white hover:shadow-inner hover:rounded-md shadow-md shadow-black"><AiFillGithub /></p>

                                </div>
                            </Fade>

                        </div>
                    </div>
                </div>

            </div>
            <hr className='mt-28 border-1 border-[#131619]' />
        </div>
    );
};

export default Banner;