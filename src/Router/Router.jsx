import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About/About";
import Portfolio from "../Pages/Prtfolio/Portfolio";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/contact";
import JavaScript from "../Pages/Education/JS/JavaScript";
import ReactWeb from "../Pages/Education/React/ReactWeb";
import FrontEnd from "../Pages/Education/FrontEnd/FrontEnd";
import More from "../Pages/Blog/More";
import Buisness from "../Components/Buisness";
import WebDevelopment from "../Components/WebDevelopment";
import ReactDeb from "../Components/ReactDeb";
import AppDev from "../Components/AppDev";
import Parsonal from "../Components/Parsonal";
import JavaScriptt from "../Components/JavaScriptt";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/more",
                element: <More />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/jsCript",
                element: <JavaScript />
            },
            {
                path: "/react",
                element: <ReactWeb />
            },
            {
                path: "/frontEnd",
                element: <FrontEnd />
            },
            {
                path: "/buisness",
                element: <Buisness />
            },
            {
                path: "/development",
                element: <WebDevelopment />
            },
            {
                path: "/react-dev",
                element: <ReactDeb />
            },
            {
                path: "/app-dev",
                element: <AppDev />
            },
            {
                path: "/parsonal",
                element: <Parsonal />
            },
            {
                path: "/java-script",
                element: <JavaScriptt />
            }
        ]
    }
])
export default router;