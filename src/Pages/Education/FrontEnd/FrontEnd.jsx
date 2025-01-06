import React from 'react';
import profile from "../../../assets/image/pngpic.png"
import { Link } from 'react-router-dom';
import { AiOutlineDownload } from 'react-icons/ai';

const FrontEnd = () => {
    return (
        <div className="max-w-[1340px] mx-auto text-gray-200 mt-10 mb-24">
            <h1 className="text-center text-2xl mb-10 font-semibold text-[#FF024F]">EDUCATION</h1>
            <div className="grid md:grid-cols-2 items-center gap-8 px-3">
                <div>
                    <img className="shadow-lg w-full md:w-[500px] object-cover  scale-95 hover:scale-100 ease-in duration-300 shadow-[#131619] rounded-lg" src={profile} alt="" />
                </div>
                <div className="mt-6 p-9 shadow-lg rounded-md ">
                    <h1 className="md:text-4xl text-xl font-semibold">Bachelor of Science in Computer Engineering</h1>
                    <p className="mb-10 mt-3 text-[#FF024F]">Independent University, Bangladesh</p>
                    <p className="md:text-4xl text-xl font-semibold">Complete Web Development Course</p>
                    <p className="mb-10 mt-3">Institute of <span className="text-[#FF024F]">Programming Hero!</span></p>
                    {/* <p className="md:text-4xl text-xl font-semibold">Professional Graphics Design Course</p> */}
                    {/* <p className="mb-10 mt-3">Institute of <span className="text-[#FF024F]">Digital It!</span></p> */}

                    <button className="hover:shadow-slate-400 hover:shadow-inner px-4 py-3 rounded-full duration-300 border hover:text-[#FF024F]"><Link target="_blank" className='flex items-center gap-3' to="../../../resume/Rumman_resume.pdf">Download <AiOutlineDownload className='text-2xl'/></Link></button>
                </div>
            </div>
        </div>
    );
};

export default FrontEnd;