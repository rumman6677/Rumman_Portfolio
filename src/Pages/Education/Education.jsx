import React from 'react';
import { Link } from 'react-router-dom';

const Education = () => {
    return (
        <div className="px-3 mb-20 max-w-[1340px] mx-auto">
            <h1 className="text-center text-4xl font-thin text-gray-200 mt-20">Know About <span className="text-[#FF024F] font-bold">Rumman?</span></h1>
            <div className="grid md:grid-cols-3 gap-10 text-gray-200 text-center items-center mt-12">

                <h1 className="text-lg hover:font-semibold hover:shadow-slate-400 hover:shadow-inner hover:rounded-full shadow-md rounded-full shadow-slate-900 hover:text-[#FF024F] cursor-pointer p-5 scale-95 hover:scale-105 ease-in duration-300"><Link to="frontEnd">EDUCATION</Link></h1>

                <h1 className="text-lg hover:font-semibold hover:shadow-slate-400 hover:shadow-inner hover:rounded-full shadow-md rounded-full shadow-slate-900  hover:text-[#FF024F] cursor-pointer p-5 scale-95 hover:scale-105 ease-in duration-300"><Link to="/react">PROFESSIONAL SKILL</Link></h1>

                <h1 className="text-lg hover:font-semibold hover:shadow-slate-400 hover:shadow-inner hover:rounded-full shadow-md rounded-full shadow-slate-900 hover:text-[#FF024F] cursor-pointer p-5 scale-95 hover:scale-105 ease-in duration-300"><Link to="/jsCript">EXPERIENCE</Link></h1>
            </div>
        </div>
    );
};
export default Education;