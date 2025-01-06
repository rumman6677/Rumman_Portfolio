import React from 'react';
import portfolio from "../../assets/image/edu.png"



import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import { BsGithub } from 'react-icons/bs';


const Portfolio = () => {
    return (
        <div className="max-w-[1340px] mx-auto px-3 mb-28 mt-8">
            <h1 className="text-center font-light text-lg my-3 text-gray-200">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h1>
            <p className="text-3xl font-bold uppercase text-center text-[#FF024F]">Projects</p>

            <div className="grid md:grid-cols-3 gap-10 mt-10 cursor-pointer">
                <Fade direction="left" cascade>
                    <div className="relative text-gray-200 shadow-slate-900 p-2 shadow-md hover:bg-gray-900 text-whit hover:shadow-white hover:shadow-inner px-4 py-2 rounded-md duration-300">
                        <img className="rounded-md w-full mt-3 h-[400px] scale-95 hover:scale-100 ease-in duration-300 hover:rounded-md" src={portfolio} alt="" />
                        <Fade cascade>
                            <p className="px-2 my-3 ">Educare encompasses a range of activities and approaches aimed at promoting educational.</p>
                            <div className="flex justify-between px-2 my-6 ">
                                <h1 className="uppercase font-semibold">EduCare Sports</h1>
                                <h1><Link target="-blank" className="font-bold uppercase hover:shadow-slate-400 hover:shadow-inner px-4 py-2 rounded-full duration-100 hover:text-white" to="https://edu-care-f6963.web.app/">Demo</Link></h1>
                            </div>
                        </Fade>
                        <div className="flex items-center gap-10 text-xl mb-4 mx-auto justify-center hover:text-[#FF024F]">
                            <Link target="-blank" to="https://github.com/tofael005/edu-care"><BsGithub className="text-3xl" /></Link>
                            <Link target="-blank" to="https://edu-care-f6963.web.app/"><h1 className="font-bold uppercase hover:shadow-slate-400 hover:shadow-inner px-3 py-2 rounded-full duration-100 hover:text-white">LIVE</h1></Link>
                        </div>
                    </div>
                </Fade>
                <Fade cascade>
                    <div data-aos="flip-left" className="relative text-gray-200 p-2 shadow-md shadow-slate-900 hover:bg-gray-900 text-whit hover:shadow-white hover:shadow-inner px-4 py-2 rounded-md duration-300">
                        <img className="rounded-md w-full mt-3 h-[400px] scale-95 hover:scale-100 ease-in duration-300 hover:rounded-md" src="" alt="" />
                        <Fade cascade>
                            <p className="px-2 my-3">Food is essential for sustenance and nourishment. It provides energy and nutrients to support.</p>
                            <div className="flex justify-between px-2 my-6 ">
                                <h1 className="uppercase font-semibold">Feans Chef</h1>
                                <h1><Link target="-blank" className="font-bold uppercase hover:shadow-slate-400 hover:shadow-inner px-4 py-2 rounded-full duration-100 hover:text-white" to="https://feans-chef.netlify.app/">Demo</Link></h1>
                            </div>
                        </Fade>
                        <div className="flex items-center gap-10 text-xl mb-4 mx-auto justify-center hover:text-[#FF024F]">
                            <Link target="-blank" to="https://github.com/tofael005/Feans-chef"><BsGithub className="text-3xl" /></Link>
                            <Link target="-blank" to="https://feans-chef.netlify.app/"><h1 className="font-bold uppercase hover:shadow-slate-400 hover:shadow-inner px-3 py-2 rounded-full duration-100 hover:text-white">LIVE</h1></Link>
                        </div>
                    </div>
                </Fade>

                <Fade direction="right" cascade>
                    <div className="relative text-gray-200 p-2 shadow-md shadow-slate-900 hover:bg-gray-900 text-whit hover:shadow-white hover:shadow-inner px-4 py-2 rounded-md duration-300">
                        <img className="rounded-md w-full mt-3 h-[400px] scale-95 hover:scale-100 ease-in duration-300 hover:rounded-md" src="" alt="" />
                        <Fade cascade>
                            <p className="px-2 my-3">Rattles, plush toys, stacking cups, teething rings, musical mobiles, and activity gyms are popular</p>
                            <div className="flex justify-between px-2 my-6 ">
                                <h1 className="uppercase font-semibold">BBabun Toys</h1>
                                <h1><Link target="-blank" className="font-bold uppercase hover:shadow-slate-400 hover:shadow-inner px-4 py-2 rounded-full duration-100 hover:text-white" to="https://bbabun-toys.web.app/">Demo</Link></h1>
                            </div>
                        </Fade>
                        <div className="flex items-center gap-10 text-xl mb-4 mx-auto justify-center hover:text-[#FF024F]">
                            <Link target="-blank" to="https://github.com/tofael005/bbabun-toys"><BsGithub className="text-3xl" /></Link>
                            <Link target="-blank" to="https://bbabun-toys.web.app/"><h1 className="font-bold uppercase hover:shadow-slate-400 hover:shadow-inner px-3 py-2 rounded-full duration-100 hover:text-white">LIVE</h1></Link>
                        </div>
                    </div>
                </Fade>

                {/* <Fade direction="left" cascade>
                    <div className="relative text-gray-200 p-2 shadow-md shadow-slate-900 hover:bg-gray-900 text-whit hover:shadow-white hover:shadow-inner px-4 py-2 rounded-md duration-300">
                        <img className="rounded-md w-full mt-3 h-[400px] scale-95 hover:scale-100 ease-in duration-300 hover:rounded-md" src="" alt="" />
                        <Fade cascade>
                            <p className="px-2 my-3">A finder is a tool or application that helps locate files, folders, or information on a computer.</p>
                            <div className="flex justify-between px-2 my-6 ">
                                <h1 className="uppercase font-semibold">Job Finder</h1>
                                <h1><Link target="-blank" className="font-bold uppercase hover:shadow-slate-400 hover:shadow-inner px-4 py-2 rounded-full duration-100 hover:text-white" to="https://job-finders.netlify.app/">Demo</Link></h1>
                            </div> 
                        </Fade>
                        <div className="flex items-center gap-10 text-xl mb-4 mx-auto justify-center hover:text-[#FF024F]">
                            <Link target="-blank" to="https://github.com/tofael005"><BsGithub className="text-3xl" /></Link>
                            <Link target="-blank" to="ttps://job-finders.netlify.app/"><h1 className="font-bold uppercase hover:shadow-slate-400 hover:shadow-inner px-3 py-2 rounded-full duration-100 hover:text-white">LIVE</h1></Link>
                        </div>
                    </div>
                </Fade>
                <Fade cascade>
                    <div data-aos="flip-left" className="relative text-gray-200 p-2 shadow-md shadow-slate-900 hover:bg-gray-900 text-whit hover:shadow-white hover:shadow-inner px-4 py-2 rounded-md duration-300">
                        <img className="rounded-md w-full mt-3 h-[400px] scale-95 hover:scale-100 ease-in duration-300 hover:rounded-md" src="" alt="" />
                        <Fade cascade>
                            <p className="px-2 my-3">A finder is a tool or application that helps locate files, folders, or information on a computer.</p>
                            <div className="flex justify-between px-2 my-6 ">
                                <h1 className="uppercase font-semibold">Knowladge Cafe</h1>
                                <h1><Link target="-blank" className="font-bold uppercase hover:shadow-slate-400 hover:shadow-inner px-4 py-2 rounded-full duration-100 hover:text-white" to="https://poetic-salamander-fb0943.netlify.app/">Demo</Link></h1>
                            </div> 
                        </Fade>
                        <div className="flex items-center gap-10 text-xl mb-4 mx-auto justify-center hover:text-[#FF024F]">
                            <Link target="-blank" to="https://github.com/tofael005"><BsGithub className="text-3xl" /></Link>
                            <Link target="-blank" to="https://poetic-salamander-fb0943.netlify.app/"><h1 className="font-bold uppercase hover:shadow-slate-400 hover:shadow-inner px-3 py-2 rounded-full duration-100 hover:text-white">LIVE</h1></Link>
                        </div>
                    </div>
                </Fade>
                <Fade direction="right" cascade>
                    <div className="relative text-gray-200 p-2 shadow-md shadow-slate-900 hover:bg-gray-900 text-whit hover:shadow-white hover:shadow-inner px-4 py-2 rounded-md duration-300">
                        <img className="rounded-md w-full mt-3 h-[400px] scale-95 hover:scale-100 ease-in duration-300 hover:rounded-md" src="" alt="" />
                        <Fade cascade>
                            <p className="px-2 my-3">A finder is a tool or application that helps locate files, folders, or information on a computer.</p>
                            <div className="flex justify-between px-2 my-6 ">
                                <h1 className="uppercase font-semibold">Knowladge Cafe</h1>
                                <h1><Link target="-blank" className="font-bold uppercase hover:shadow-slate-400 hover:shadow-inner px-4 py-2 rounded-full duration-100 hover:text-white" to="https://frolicking-dodol-61d812.netlify.app/">Demo</Link></h1>
                            </div> 
                        </Fade>
                        <div className="flex items-center gap-10 text-xl mb-4 mx-auto justify-center hover:text-[#FF024F]">
                            <Link target="-blank" to="https://github.com/tofael005"><BsGithub className="text-3xl" /></Link>
                            <Link target="-blank" to="https://frolicking-dodol-61d812.netlify.app/"><h1 className="font-bold uppercase hover:shadow-slate-400 hover:shadow-inner px-3 py-2 rounded-full duration-100 hover:text-white">LIVE</h1></Link>
                        </div>
                    </div>
                </Fade> */}
            </div>
        </div>
    );
};

export default Portfolio;