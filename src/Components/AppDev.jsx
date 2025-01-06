import React from 'react';
import appdev from "../assets/app.jpg"
import { Fade } from "react-awesome-reveal";

const AppDev = () => {
    return (
        <div className="max-w-[1340px] mx-auto text-gray-200 mt-16 grid md:grid-cols-2 items-center gap-10 px-3">
            <Fade direction="left"><img className="rounded-md w-full h-[500px]" src={appdev} alt="" /></Fade>
            <div>
                <Fade direction="right" cascade>
                    <h1 className="text-4xl font-semibold mb-4 text-[#FF024F]">AppDev</h1>
                    <p className="text-justify">App development refers to the process of creating applications for various platforms, such as mobile devices, desktops, or web browsers. It involves designing, coding, testing, and deploying software applications that provide specific functionalities and services to users.Mobile app development focuses on creating applications for smartphones and tablets, typically for platforms like iOS (Apple) or Android (Google). It requires expertise in programming languages such as Swift or Kotlin, along with knowledge of mobile app design principles and user experience (UX) considerations.Desktop app development involves building applications that run on desktop operating systems like Windows, macOS, or Linux. Developers use programming languages like Java, C++, or Python, and frameworks like Electron to create cross-platform desktop applications.Web app development involves creating applications that run in web browsers, accessible via the internet. It usually involves technologies like HTML, CSS, and JavaScript, along with frameworks like React, Angular, or Vue.js. Web apps can run on various devices and operating syste a wide range of  updates, bug fixing, and responding to user feedback to enhance the app's usability and effectiveness.Angular, or Vue.js. Web apps can run on various devices and operating systems, making them accessible to a wide range of  updates, bug fixing, and responding to user feedback to enhance the app's usability and effectiveness.Angular, or Vue.js. Web apps can run on various devices and .</p>
                </Fade>
            </div>
        </div>
    );
};

export default AppDev;
