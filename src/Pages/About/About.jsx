import React from 'react';
import picture from "../../assets/image/IMG_6451.jpg"
import { Link } from 'react-router-dom';
import { AiOutlineDownload } from 'react-icons/ai';
import { Fade } from "react-awesome-reveal";
import resume from "../../resume/Rumman_resume.pdf"


const About = () => {

    return (
        <div className="max-w-[1340px] mx-auto px-3 mb-28">
            <div className="grid md:grid-cols-2 gap-6 items-center mt-28 mb-48 ">
                <Fade delay={50} direction="left">
                    <div className="text-left md:text-left md:ml-48 text-gray-300 px-3">
                        <h1 className="text-3xl text-[#FF024F] mb-2">About Me</h1>
                        <h1 className="md:text-4xl text-3xl font-semibold">Name: Md. Rumman Hasan</h1>
                        <p className="my-4">Profession: Front-End Developer</p>
                        <p className="my-4">Phone  : +8801776536677</p>
                        <p className="">Email  : rumman6677@gmail.com</p>
                        <p className="my-4">Blood  : B+(Positive)</p>
                        {/* <p className='my-4'>heigth: 5.5 fit</p> */}
                        <p>Age: 25 Years old.</p>
                        {/* <p className="my-4">Weight: 63KG</p> */}
                        <p className="mb-6 mt-6">Address:  Dhaka, Bangladesh</p>
                        <button className="border mb-6 duration-300 p-2 hover:bg-[#FF024F] rounded"><Link target="_blank" className='flex items-center gap-3' to={resume} download>Download <AiOutlineDownload className='text-2xl' /></Link></button>

                    </div>
                </Fade>
                <div>

                    {/* <img data-aos="flip-left" className="shadow-lg w-full md:w-[520px] object-cover  scale-95 hover:scale-105 ease-in duration-300 hover:bg-[#26282d] items-center block mx-auto hover:shadow-white hover:shadow-inner hover:rounded-md shadow-black" src={logo} alt="" /> */}
                    <img data-aos="flip-left" className="shadow-lg w-full md:w-[520px] object-cover  scale-95 hover:scale-105 ease-in duration-300 hover:bg-[#26282d] items-center block mx-auto hover:shadow-white hover:shadow-inner hover:rounded-md shadow-black" src={picture} alt="" />

                </div>
            </div>
            <hr className='mt-22 border-1 border-[#131619] px-3' />
        </div>
    );
};

export default About;