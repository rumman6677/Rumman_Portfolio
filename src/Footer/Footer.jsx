import React from 'react';
import logo1 from "../../src/assets/image/nav.jpg"
import ScrollToTop from 'react-scroll-to-top';
import MyIcon from './MyIcon';

const Footer = () => {
    return (
        <div className="max-w-[1340px] mx-auto px-3 text-gray-200 mt-12">
            <ScrollToTop smooth top={1000} component={<MyIcon />} />
            <div className="text-center">
                <img className="w-16 cursor-pointer block mx-auto rounded-full border border-gray-700" src={logo1} alt="" />
                <h1 className="py-6 text-gray-400">© 2023. All rights reserved by <span className="text-[#FF024F]">Md. Rumman Hasan.</span></h1>
            </div>
        </div>
    );
};

export default Footer;