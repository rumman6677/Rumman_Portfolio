import React from 'react';
import { SlArrowUp } from 'react-icons/sl';

const MyIcon = () => {
    return (
        <div className='flex items-center justify-center w-full h-full bg-black/40 rounded-md cursor-pointer'>
            <span><SlArrowUp className='w-5 h-5 font-bold  text-white' /></span>
        </div>
    );
};

export default MyIcon;
