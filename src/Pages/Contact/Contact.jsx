import React from 'react';
import imge from "../../assets/download.jpeg"
import { Link } from 'react-router-dom';
import { FiFacebook, FiLinkedin } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { useRef } from 'react';
import { Fade } from "react-awesome-reveal";
// import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const notify = () => toast("SEND SUCCESS !");
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_we8d3jc', 'template_nofci4b', form.current, 'j_ecYPOBb7wFf4Jf7')
            .then((result) => {
                console.log(result.text);
                e.target.rest()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="max-w-[1340px] mx-auto px-3 mb-20">
            <h1 className="text-center mt-10 text-3xl font-bold uppercase text-[#FF024F]">Contact with Me</h1>

            <div className="mt-10 grid md:grid-cols-2 gap-6 text-gray-200 font-light">
                <div>
                    <Fade delay={50} direction="left">
                        <img className="w-full rounded-md" src={imge} alt="" />
                        <h1 className="text-2xl text-[#FF024F] font-semibold mt-8">Md. Rumman Hasan</h1>
                        <p className="text-gray-200 my-4">I am available for freelance or remote work. Connect with me via and call in to my account or contact with me a send message.</p>
                        <p className="my-3">Phone: +880 1776536677</p>
                        <p>Email: rumman6677@gmail.com</p>
                        <div>
                            <h1 className="text-lg font-light text-gray-200 mt-6">FIND WITH ME</h1>
                            <div className="flex gap-4 mt-6">
                                <Link target="_blank" to="https://www.facebook.com/mdrumman.hasan.3" className="text-3xl hover:bg-black/30 hover:text-[#FF024F] duration-300 p-6 shadow-md  shadow-[#131619] scale-90 hover:scale-105 ease-in rounded-md text-gray-300"><FiFacebook /></Link>
                                <Link target="_blank" to="https://www.linkedin.com/in/md-rumman-hasan-46ba03328/" className="text-3xl hover:bg-black/30 hover:text-[#FF024F] duration-300 p-6 shadow-md  shadow-[#131619] scale-90 hover:scale-105 ease-in rounded-md text-gray-300"><FiLinkedin /></Link>
                                <Link target='_blank' to="https://www.instagram.com/rumman.dalim/" className="text-3xl hover:bg-black/30 hover:text-[#FF024F] duration-300 p-6 shadow-md  shadow-[#131619] scale-90 hover:scale-105 ease-in rounded-md text-gray-300"><FaInstagram /></Link>
                            </div>
                        </div>
                    </Fade>
                </div>
                <Fade delay={50} direction="right">
                    <div className="text-gray-200">
                        <form ref={form} onSubmit={sendEmail}>
                            <label htmlFor="">YOUR NAME</label> <br />
                            <input className='w-full shadow-black/50 my-3 p-4 rounded-md bg-transparent border border-white/10 shadow-md' type="text" name='form_name' placeholder='Enter your name' /><br />
                            <label htmlFor="">YOUR EMAIL</label> <br />
                            <input className="w-full p-4 my-3 rounded-md bg-transparent border border-white/10 shadow-md shadow-black/50" type="email" name="form_email" id="" placeholder='Enter your email' /><br />
                            <label htmlFor="">SUBJECT</label><br />
                            <input className="w-full p-4 my-3 rounded-md bg-transparent border border-white/10 shadow-md shadow-black/50" type="text" name='from_name' placeholder='Enter your question' /><br />
                            <label htmlFor="">YOUR MESSAGE</label><br />
                            <textarea className="w-full p-4 rounded-md my-3 bg-transparent border border-white/10 shadow-md shadow-black/50" name="message" id="" cols="10" rows="10" placeholder='Type your massage'></textarea>
                            <input onClick={notify} className="w-full cursor-pointer shadow-md shadow-black/50 p-4 rounded-md border border-white/20 hover:text-[#FF024F] hover:font-bold duration-300" type="submit" value="SEND MESSAGE" />
                        </form>
                    </div>
                </Fade>
            </div>
            <hr className='mt-28 border-1 border-[#131619]' />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Contact;