import React from 'react';
import web from "../../src/assets/web.jpg"
import { Fade } from "react-awesome-reveal";

const WebDevelopment = () => {
    return (
        <div className="max-w-[1340px] mx-auto text-gray-200 mt-16 grid md:grid-cols-2 items-center gap-10 px-3">
            <Fade direction="left"><img className="rounded-md w-full h-[500px]" src={web} alt="" /></Fade>
            <div>
                <Fade direction="right" cascade>
                    <h1 className="text-4xl font-semibold mb-4 text-[#FF024F]">Web development</h1>
                    <p className="text-justify">Web development involves the creation and maintenance of websites and web applications. It encompasses various disciplines such as web design, front-end development, back-end development, and database management. Web developers utilize programming languages, frameworks, and tools to build interactive and responsive websites that meet the needs of businesses and users. They focus on optimizing performance, ensuring compatibility across different devices and browsers, and implementing security measures to protect user data. Web development requires a combination of technical skills, problem-solving abilities, and a keen eye for design. It plays a crucial role in establishing an online presence, facilitating communication, and delivering engaging digital experiences. Web development is the process of creating and maintaining websites and web applications. It involves designing, coding, and programming using various technologies and tools to deliver functional and visually appealing digital experiences. Web developers work on both front-end and back-end aspects to ensure optimal performance and user satisfaction. Creating websites and web applications using coding and programming to deliver functional and visually appealing digital experiences. appealing digital experiences and visually appealing digital experiences. appealing digital experiences. and visually appealing digital experiences. appealing digital experiences and visually appealing digital experiences. appealing digital.</p>
                </Fade>
            </div>
        </div>
    );
};

export default WebDevelopment;