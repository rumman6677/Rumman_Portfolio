import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { Fade } from "react-awesome-reveal";

const ReactWeb = () => {
    const [htmlPercentage, setHtmlPercentage] = useState(0);
    setTimeout(() => {
        setHtmlPercentage(95);
    }, 2000);
    const [cssPercentage, setCssPercentage] = useState(0);
    setTimeout(() => {
        setCssPercentage(80);
    }, 2000);
    const [tailwindPercentage, setTailwindPercentage] = useState(0);
    setTimeout(() => {
        setTailwindPercentage(80);
    }, 2000);
    const [boostrapPercentage, setBoostrapPercentage] = useState(0);
    setTimeout(() => {
        setBoostrapPercentage(70);
    }, 2000);
    const [jsPercentage, setJsPercentage] = useState(0);
    setTimeout(() => {
        setJsPercentage(60);
    }, 2000);
    const [reactPercentage, setReactPercentage] = useState(0);
    setTimeout(() => {
        setReactPercentage(60);
    }, 2000);
    const [expressPercentage, setExpressPercentage] = useState(0);
    setTimeout(() => {
        setExpressPercentage(50);
    }, 2000);
    const [nodePercentage, setNodePercentage] = useState(0);
    setTimeout(() => {
        setNodePercentage(40);
    }, 2000);
    const [mongoPercentage, setMongoPercentage] = useState(0);
    setTimeout(() => {
        setMongoPercentage(50);
    }, 2000);
    return (
        <div className="max-w-[1340px] mx-auto text-gray-200 mt-16">
            <h1 className="text-center text-2xl font-semibold text-[#FF024F]">PROFESSIONAL SKILL</h1>
            <div className="md:max-w-[800px] w-full mx-auto mt-8 px-3 shadow-md shadow-black/50 rounded-md hover:shadow-lg hover:shadow-black">

                <div className="p-8">
                    <Fade cascade>
                        <div className="mb-4">
                            <div className='flex justify-between text-xl font-bold text-white mb-1'>
                                <p className=''>Html</p>
                                <p>95%</p>
                            </div>
                            <ProgressBar percentage={htmlPercentage} />
                        </div>
                        <div className="mb-4">
                            <div className='flex justify-between text-xl font-bold text-white mb-1'>
                                <p>CSS</p>
                                <p>80%</p>
                            </div>
                            <ProgressBar percentage={cssPercentage} />
                        </div>
                        <div className="mb-4">
                            <div className='flex justify-between text-xl font-bold text-white mb-1'>
                                <p>Tailwind CSS</p>
                                <p>80%</p>
                            </div>
                            <ProgressBar percentage={tailwindPercentage} />
                        </div>
                        <div className="mb-4">
                            <div className='flex justify-between text-xl font-bold text-white mb-1'>
                                <p>Bootstrap</p>
                                <p>70%</p>
                            </div>
                            <ProgressBar percentage={boostrapPercentage} />
                        </div>
                        <div className="mb-4">
                            <div className='flex justify-between text-xl font-bold text-white mb-1'>
                                <p>JavaScript</p>
                                <p>60%</p>
                            </div>
                            <ProgressBar percentage={jsPercentage} />
                        </div>
                        <div className="mb-4">
                            <div className='flex justify-between text-xl font-bold text-white mb-1'>
                                <p>React</p>
                                <p>60%</p>
                            </div>
                            <ProgressBar percentage={reactPercentage} />
                        </div>
                        <div className="mb-4">
                            <div className='flex justify-between text-xl font-bold text-white mb-1'>
                                <p>Express JS</p>
                                <p>50%</p>
                            </div>
                            <ProgressBar percentage={expressPercentage} />
                        </div>
                        <div className="mb-4">
                            <div className='flex justify-between text-xl font-bold text-white mb-1'>
                                <p>Node JS</p>
                                <p>40%</p>
                            </div>
                            <ProgressBar percentage={nodePercentage} />
                        </div>
                        <div className="mb-4">
                            <div className='flex justify-between text-xl font-bold text-white mb-1'>
                                <p>MongoDB</p>
                                <p>50%</p>
                            </div>
                            <ProgressBar percentage={mongoPercentage} />
                        </div>
                    </Fade>
                </div>

            </div>
        </div>
    );
};

export default ReactWeb;