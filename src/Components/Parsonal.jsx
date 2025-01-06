import React from 'react';
import parsonal from "../assets/parsonal.png"
import { Fade } from "react-awesome-reveal";

const Parsonal = () => {
    return (
        <div className="max-w-[1340px] mx-auto text-gray-200 mt-16 grid md:grid-cols-2 items-center gap-10 px-3">
            <Fade direction="left"><img className="rounded-md w-full h-[500px]" src={parsonal} alt="" /></Fade>
            <div>
                <Fade direction="right" cascade>
                    <h1 className="text-4xl font-semibold mb-4 text-[#FF024F]">Parsonal</h1>
                    <p className="text-justify">A personal portfolio is a collection of work, projects, and achievements that showcases an individual's skills, experiences, and expertise. It serves as a visual representation of their abilities and serves as a tool for self-promotion and career advancement.A personal portfolio typically includes a variety of elements, such as a biography or introduction, a resume highlighting relevant education and work experience, and a showcase of projects, artworks, or creative works. It may also include testimonials or references from clients or employers to validate the individual's skills and capabilities.In the context of web development, a personal portfolio often takes the form of a website or online platform where individuals can showcase their work, provide contact information, and demonstrate their expertise through interactive elements or case studies. It should have a visually appealing design, be easy to navigate, and effectively communicate the individual's unique value proposition.A well-crafted personal portfolio not only provides a platform to display past accomplishments but also serves as a means to attract potential clients, employers, or collaborators. It can effectively  demonstrate skills, professionalism, and creativity, helping individuals stand out in competitive fields and open up new opportunities. interactive elements or case studies. It should have a visually appealing design, be easy to navigate, and effectively communicate the individual's unique value proposition.A well-crafted personal  to attract potential clients, employer. </p>
                </Fade>
            </div>
        </div>
    );
};

export default Parsonal;