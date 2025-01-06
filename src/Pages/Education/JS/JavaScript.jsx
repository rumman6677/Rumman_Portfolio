import React from 'react';
import web from "../../../assets/web.jpg"
import graphic from "../../../assets/graphic.jpg"
import { Fade } from "react-awesome-reveal";

const JavaScript = () => {
    return (
        <div className="max-w-[1340px] mx-auto text-gray-200 mt-12 mb-24">
            <h1 className="text-center text-2xl font-semibold uppercase text-[#FF024F]">experience</h1>
            <div className=" mt-10 mb-14">
                <div className="grid md:grid-cols-2 items-center gap-8 px-3">
                    <Fade delay={300} direction="left">
                        <img className="rounded-lg w-full" src={web} alt="" />
                    </Fade>
                    <div className='p-9 shadow-md shadow-black hover:shadow-lg hover:shadow-black/40 rounded-md duration-300 cursor-pointer'>
                        <Fade cascade delay={300}>
                            <h1 className="md:text-5xl text-4xl mb-14 font-semibold text-[#FF024F]">Web <br /> Development</h1>
                            <p className="mb-6 text-justify">I have extensive experience in web development using HTML, CSS, React, Tailwind CSS, Bootstrap, React Router Dom, and JavaScript, Express JS, MongoDB, Node JS. With these technologies, I can build dynamic and interactive user interfaces, implement responsive designs, handle routing, and create efficient and scalable web applications.</p>
                            <p className="font-semibold text-lg text-[#FF024F]">1 years experience in this field (fresher).</p>
                        </Fade>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 items-center gap-8 px-3 mt-16 flex-col-reverse">
                    <div className='p-9 shadow-md shadow-black hover:shadow-lg hover:shadow-black/40 rounded-md duration-300 cursor-pointer'>
                        <Fade cascade delay={300}>
                            <h1 className="md:text-5xl text-4xl mb-14 font-semibold text-[#FF024F]">Graphic Designer</h1>
                            <p className="mb-6 text-justify">I have many years of experience as a graphic designer, specializing in Adobe PhotoShop and Adobe Illustrator. I am proficient in creating stunning visual designs, manipulating images, and crafting illustrations. With my expertise, I can bring your creative visions to life and deliver high-quality graphical assets for various purposes.Adobe Illustrator. I am proficient in creating stunning visual designs, manipulating images, and crafting illustrations. With my expertise, proficient in creating stunning visual designs, manipulating images, I can bring your creative visions to life and creative visions to life.</p>
                            <h1 className="font-semibold text-lg text-[#FF024F]">4th years experience in this field.</h1>
                        </Fade>
                    </div>
                    <Fade delay={300} direction="right">
                        <img className="rounded-lg w-full" src={graphic} alt="" />
                    </Fade>
                </div>
            </div>
            <hr className='mt-28 border-1 border-[#131619]' />
        </div>
    );
};

export default JavaScript;