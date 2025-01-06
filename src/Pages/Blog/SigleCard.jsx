import React from 'react';
import { MdOutlineWatchLater } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

const SigleCard = ({ data }) => {
    const { image, name, des } = data;
    return (
        <div className="text-gray-200 p-2 shadow-md cursor-pointer shadow-slate-900 hover:bg-slate-900 text-whit hover:shadow-white hover:shadow-inner px-4 py-2 rounded-md duration-300 hover:text-[#FF024F]">
            <Fade cascade>
                <div data-aos="zoom-in" className="p-4">
                    <img className="w-full h-[300px] scale-100 mt-2 hover:scale-105 ease-in duration-300 rounded-md" src={image} alt="" />
                    <Fade cascade>
                        <div className="flex justify-between text-gray-400 items-center mt-6">
                            <p>Article</p>
                            <div className="flex gap-2 items-center">
                                <MdOutlineWatchLater />
                                <p>5min read</p>
                            </div>
                        </div>
                        <h1 className="text-2xl text-gray-200 text-center font-bold my-6">{name}</h1>
                        <div className="text-gray-200 ">
                            <p>{des} <Link to="/more" className="text-[#FF024F] font-bold">More</Link></p>
                        </div>
                    </Fade>
                </div>
            </Fade>
        </div>
    );
};

export default SigleCard;