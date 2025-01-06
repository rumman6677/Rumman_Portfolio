import React from 'react';
import react from "../assets/react.png"
import { Fade } from "react-awesome-reveal";

const ReactDeb = () => {
    return (
        <div className="max-w-[1340px] mx-auto text-gray-200 mt-16 grid md:grid-cols-2 items-center gap-10 px-3">
            <Fade direction="left"> <img className="rounded-md w-full h-[500px]" src={react} alt="" /></Fade>
            <div>
                <Fade direction="right" cascade>
                    <h1 className="text-4xl font-semibold mb-4 text-[#FF024F]">ReactDeb</h1>
                    <p className="text-justify">React.js is a popular JavaScript library used for building user interfaces (UIs) for web applications. Developed by Facebook, React.js follows a component-based architecture, where UI elements are divided into reusable and independent components. This approach promotes modular development, code reusability, and easy maintenance. React.js utilizes a virtual DOM (Document Object Model) for efficient rendering. When the state of a component changes, React updates only the necessary parts of the DOM, resulting in faster and more efficient updates. React.js encourages a declarative programming style, allowing developers to describe how the UI should look based on the application's state. This simplifies the process of building complex UIs by reducing the cognitive load and making code easier to understand and debug.React.js can be used alongside other libraries or frameworks and is compatible with different development stacks. It provides extensive the same component-based approach.Overall, React.js offers a powerful and efficient solution for creating dynamic, interactive, and scalable UIs. Overall, React.js offers a powerful and efficient solution for creating dynamic, interactive, and scalable UIs.Overall, React.js offers a powerful and efficient solution for creating dynamic, interactive, and scalable UIs.Overall, React.js offers a powerful and efficient solution for creating dynamic, interactive, and scalable UIs.Overall, React.js offers a powerful and efficient solution.</p>
                </Fade>
            </div>
        </div>
    );
};

export default ReactDeb;