import React, { useState } from 'react';
import Draggable from "react-draggable";
import "../assets/stylesheets/About.css";

const About = () => {

  const [activeWindow, setActiveWindow] = useState('');

  const handleWindowClick = (windowName) => {
    setActiveWindow(windowName);
  };

  return (
    <div className="container">
      <div className="projects-title">
        <h1 className="text-white text-4xl mt-6 ml-5">About<span className="text-yellow-500">()</span>;</h1>
      </div>
      <div className='flex flex-col justify-center md:flex-row flex-wrap min-w-full gap-10 px-5 mt-9'>
      {/* //////// MAC-WINDOW-YELLOW ////////*/}
        <Draggable>
          <div className="mockup-code-3-master min-h-full mb-10"  onClick={() => handleWindowClick('mockup-code-3-master')}
            style={{
              zIndex: activeWindow === 'mockup-code-3-master' ? 6 : 0,
            }}>
            <div className="mockup-code bg-stone-700/75 w-full min-h-full text-primary-content cursor-grab select-none mockup-code-3 shadow-custom">
              <div className="flex flex-col items-center gap-4 px-5">
                <div className='max-w-[40%]'>
                  <img src="https://res.cloudinary.com/djr22sgp3/image/upload/v1680188751/4a996039caa33fd3569b0f2ef7010e1e-sticker_uiiyam.png" className="scale-95 rounded-full bg-stone-200/75"/>
                </div>
                <p className='text-stone-700 font-extrabold bg-stone-200/75 p-3 rounded-box'>
                  Hey I'm Max, a junior Fullstack Dev from the UK. I've recently finished a 9 week bootcamp at Le Wagon, where I learned the fundamentals of Ruby, Rails, AJAX, Javascript and more. I've been a self-taught developer up-until this point, building small projects here and there, and continually pushing skills with each one.
                  I'm currently looking for a junior role in the tech industry, so if you have any opportunities please get in touch!
                </p>
              </div>
            </div>
            </div>
        </Draggable>
        {/* //////// MAC-WINDOW-YELLOW END ////////*/}
        {/* //////////////////////////////////////// */}
        {/* //////// MAC-WINDOW-TERMINAL ////////*/}
        <Draggable>
          <div className="mockup-code-5-master min-h-full" onClick={() => handleWindowClick('mockup-code-5-master')}
            style={{
              zIndex: activeWindow === 'mockup-code-5-master' ? 6 : 0,
            }}>
            <div className="mockup-code cursor-grab bg-stone-700/75 rounded-box min-h-full shadow-custom mockup-code-5">
              <div className='leading-tigh px-5'>
                <h1 className='text-white mt-8'>~ Technologies + Tools</h1>
                ├── src/<br></br>
                │   ├── <span className='font-bold text-white'>Html</span><br></br>
                │   ├── <span className='font-bold text-white'>CSS</span><br></br>
                │   │           ├── Sass<br></br>
                │   │           └── Tailwind<br></br>
                │   ├── <span className='font-bold text-white'>JavaScript</span><br></br>
                │   │   ├── TypeScript<br></br>
                │   │   └── React<br></br>
                │   ├── <span className='font-bold text-white'>Python</span><br></br>
                │   └── <span className='font-bold text-white'>Ruby + Rails</span><br></br>
                ├── <span className='font-bold text-white'>Git + GitHub</span><br></br>
                ├── <span className='font-bold text-white'>Heroku, Netlify</span><br></br>
                ├── <span className='font-bold text-white'>Cloudinary</span><br></br>
                ├── <span className='font-bold text-white'>Postman</span><br></br>
                └── <span className='font-bold text-white'>SQLite + PostgreSQL</span><br></br>
                <br></br>
                <p className='tech-window-info'>I have worked with all of these technologies and tools in the past at varying levels.</p>
              </div>
            </div>
          </div>
        </Draggable>
        {/* //////// MAC-WINDOW-TERMINAL-END ////////*/}
        {/* //////////////////////////////////////// */}
        {/* //////// MAC-WINDOW-GREY ////////*/}
        <Draggable>
          <div className="mockup-code-6-master min-h-full" onClick={() => handleWindowClick('mockup-code-6-master')}
            style={{
              zIndex: activeWindow === 'mockup-code-6-master' ? 6 : 0,
            }}>
            <div className="mockup-code bg-stone-700/75 w-full min-h-full text-primary-content cursor-grab select-none mockup-code-6 shadow-custom">
              <div className="flex items-center justify-center min-h-screen flex-col gap-5">
                <div className='bg-stone-600 w-[90%] p-4 rounded-box'>
                  <h2 className='text-white text-2xl font-bold pl-3'>{"Contact >"}</h2>
                  <div className='contact-links flex flex-row justify-center gap-4 mt-1'>
                    <a href="https://github.com/mxwtd" target={'_blank'} className='text-white font-bold text-xl cursor-pointer social-links'>Github</a>
                    <a href="https://www.linkedin.com/in/max-whitehead-5b186b163/" target={'_blank'} className='text-white font-bold text-xl cursor-pointer social-links'>LinkedIn</a>
                    <a href="mailto:midtown.fret-0e@icloud.com" target={'_blank'} className='text-white font-bold text-xl cursor-pointer social-links'>Email</a>
                  </div>
                </div>
                <div className='bg-stone-600 w-[90%] p-4 rounded-box'>
                  <h2 className='text-white text-2xl font-bold pl-3 mb-2'>{"About me >"}</h2>
                  <p className='px-3'>I've been a self taught programmer for over a year, and have had experience building sites for the over five years. I started learning how to code beacause I enjoy the creative challenges and building programs that will serve a true purpose.</p>
                  <br></br>
                  <p className='px-3'>I also have a passion for technology, from cryptocurrencies to Ai, I find new innovations fascinating.</p>
                </div>
              </div>
            </div>
          </div>
        </Draggable>
        {/* //////// MAC-WINDOW-GREY END ////////*/}
      </div>
    </div>
  );
};

export default About;
