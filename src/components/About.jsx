import React, { useState } from 'react';
import Draggable from "react-draggable";
import "/Users/maxwtd/Desktop/PortfolioV3/src/assets/stylesheets/About.css"

const About = () => {
  const [activeWindow, setActiveWindow] = useState('');

  const handleWindowClick = (windowName) => {
    setActiveWindow(windowName);
  };
  return (
    <div className="container">
      <div className="projects-title">
      <h1 className="text-white text-4xl mt-6 ml-10">About<span className="text-yellow-500">()</span>;</h1>
      </div>
      {/* //////// MAC-WINDOW-YELLOW ////////*/}
      <Draggable>
        <div className="mockup-code-3-master">
          <div className="mockup-code bg-yellow-500 w-full text-primary-content absolute cursor-grab select-none mockup-code-3" onClick={() => handleWindowClick('mockup-code-3')}
            style={{
              zIndex: activeWindow === 'mockup-code-3' ? 6 : 0,
            }}>
            <div className="flex flex-col items-center gap-4 px-5">
              <div className='w-custom2'>
                <img src="https://res.cloudinary.com/djr22sgp3/image/upload/v1680188751/4a996039caa33fd3569b0f2ef7010e1e-sticker_uiiyam.png" className="scale-95 rounded-full bg-stone-700"/>
              </div>
              <p className='text-stone-700 font-extrabold bg-slate-200/75 p-3 rounded-box'>
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
        <div className="mac-window-3 cursor-grab bg-stone-700/75" onClick={() => handleWindowClick('mac-window-3')}
          style={{
            zIndex: activeWindow === 'mac-window-3' ? 6 : 0,
          }}>
          <div className="mac-window-header">
            <div className="mac-window-header-button-master">
              <div className="mac-window-header-button btn-red"></div>
              <div className="mac-window-header-button btn-yellow"></div>
              <div className="mac-window-header-button btn-green"></div>
            </div>
            <p className="mac-window-header-title text-gray-300">~/Desktop/PortfolioV3</p>
          </div>
          <div className='leading-tigh pt-4'>
            <h1 className='text-white'>~ Languages and Technologies</h1>
            ├── src/<br></br>
            │   ├── <span className='font-bold text-white'>Html</span><br></br>
            │   ├── <span className='font-bold text-white'>CSS</span><br></br>
            │   │           ├── Sass<br></br>
            │   │           └── Tailwind<br></br>
            │   ├── <span className='font-bold text-white'>JavaScript</span><br></br>
            │   │   ├── TypeScript<br></br>
            │   │   └── React<br></br>
            │   ├── <span className='font-bold text-white'>Python</span><br></br>
            │   └── <span className='font-bold text-white'>Ruby</span><br></br>
            │       └── Ruby on Rails<br></br>
            └── <span className='font-bold text-white'>Git, Heroku, Postman, SQLite</span><br></br>
          </div>
        </div>
      </Draggable>
      {/* //////// MAC-WINDOW-TERMINAL-END ////////*/}
    </div>
  );
};

export default About;
