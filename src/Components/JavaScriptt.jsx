import React from 'react';
import jsdev from "../assets/js.jpg"
import { Fade } from "react-awesome-reveal";

const JavaScriptt = () => {
    return (
        <div className="max-w-[1340px] mx-auto text-gray-200 mt-16 grid md:grid-cols-2 items-center gap-10 px-3">
            <Fade direction="left"> <img className="rounded-md h-[500px] w-full" src={jsdev} alt="" /></Fade>
            <div>
                <Fade direction="right" cascade>
                    <h1 className="text-4xl font-semibold mb-4 text-[#FF024F]">Javascript</h1>
                    <p className="text-justify">JavaScript is a high-level, interpreted programming language widely used for web development. It allows developers to add dynamic and interactive elements to websites and web applications. As a client-side scripting language, JavaScript runs directly in the web browser, enabling real-time manipulation of webpage content.JavaScript provides a rich set of features and functionalities, including event handling, DOM manipulation, form validation, and asynchronous programming with AJAX. It also supports modern frameworks and libraries like React, Angular, and Vue.js, enabling the creation of robust and scalable web applications.With the rise of Node.js, JavaScript can now be used for server-side development as well. Node.js allows developers to build scalable and efficient web servers, leveraging the same language and ecosystem.JavaScript's versatility, ease of use, and extensive community support have made it one of the most popular programming languages. It powers a wide range of applications, from simple scripts to complex enterprise-level systems. Additionally, JavaScript has expanded beyond the web and is now used in areas such as mobile app development (React Native), desktop app development (Electron), and even machine learning (TensorFlow.js).Learning JavaScript opens up app development (React Native), desktop app development (Electron), and even machine learning (TensorFlow.js).Learning JavaScript opens up  a world of possibilities for developers, enabling them to create interactive, dynamic, and powerful.</p>
                </Fade>
            </div>
        </div>
    );
};

export default JavaScriptt;