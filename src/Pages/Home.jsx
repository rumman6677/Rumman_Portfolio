import React from 'react';
import Banner from '../Header/Banner';
import WhatIDo from './WhatIDo/WhatIDo';
import Portfolio from './Prtfolio/Portfolio';
import Education from './Education/Education';
import Blog from './Blog/Blog';
// import Particless from '../Particless';
import Contact from './Contact/Contact';
import CounterUp from '../Components/CounterUp';


const Home = () => {
    return (
        <div className=" px-3">
            <div>
                <Banner />
                <WhatIDo />
                <Education />
                {/* <Portfolio /> */}
                {/* <CounterUp /> */}
                <Blog />
                {/* <Particless /> */}
                <Contact />
            </div>
        </div>
    );
};

export default Home;