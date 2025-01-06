import React from 'react';
import NavBar from '../Header/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className="bg-[#303238] overflow-x-hidden font-sans">
            <NavBar />
            <div className=" md:min-h-[calc(100vh-100px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
