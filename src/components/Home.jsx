// import React from "react";
import React, { useState } from 'react';
import Draggable from "react-draggable";
import "/Users/maxwtd/Desktop/PortfolioV3/src/assets/stylesheets/Home.css"
import myImage from '/Users/maxwtd/Desktop/PortfolioV3/src/assets/blob.png';

const Landing = () => {
  const [activeWindow, setActiveWindow] = useState('');

  const handleWindowClick = (windowName) => {
    setActiveWindow(windowName);
  };
  return (
    <div className="container">
      <div className="projects-title">
        <h1 className="text-white text-4xl mt-6 ml-10">Portfolio<span className="text-yellow-500">()</span>;</h1>
      </div>
      {/* //////// MAC-WINDOW-TERMINAL ////////*/}
      <Draggable handle=".mac-window-header" bounds="parent">
        <div className="mac-window cursor-grab shadow-custom" onClick={() => handleWindowClick('mac-window')}
          style={{
            zIndex: activeWindow === 'mac-window' ? 6 : 0,
          }}>
          <div className="mac-window-header">
            <div className="mac-window-header-button-master">
              <div className="mac-window-header-button btn-red"></div>
              <div className="mac-window-header-button btn-yellow"></div>
              <div className="mac-window-header-button btn-green"></div>
            </div>
            <p className="mac-window-header-title text-gray-300">
              ~/Desktop/PortfolioV3
            </p>
          </div>
          <h1 className="text-white mt-4">Last login: Mon Mar 27 09:32:35</h1>
          <h1 className="text-blue-500 mt-4">➜{" "}<span className="text-blue-200">PortfolioV3</span> git:(<span className="text-red-500">main</span>){" "}<span className="text-yellow-500">✗</span>{" "}<span className="text-white text-4xl">Max W</span></h1>
          <h1 className="text-blue-500 ">➜{" "}<span className="text-blue-200">PortfolioV3</span> git:(<span className="text-red-500">main</span>){" "}<span className="text-yellow-500">✗</span>{" "}<span className="text-white text-xl">Full Stack Web Dev_</span></h1>
          <h1 className="text-blue-500 bottom-h1">➜{" "}<span className="text-blue-200">PortfolioV3</span> git:(<span className="text-red-500">main</span>){" "}<span className="text-yellow-500">✗</span><span className="blinking-bar text-1xl text-white font-black">{" "}|{" "}</span></h1>
        </div>
      </Draggable>
      {/* //////// MAC-WINDOW-TERMINAL END ////////*/}
      {/* //////////////////////////////////////// */}
      {/* //////// MAC-WINDOW-LANGUAGES ////////*/}
      <Draggable>
        <div className="mac-window-2 cursor-grab shadow-custom" onClick={() => handleWindowClick('mac-window-2')}
          style={{
            zIndex: activeWindow === 'mac-window-2' ? 6 : 0,
          }}>
          <div className="mac-window-header">
            <div className="mac-window-header-button-master">
              <div className="mac-window-header-button btn-red"></div>
              <div className="mac-window-header-button btn-yellow"></div>
              <div className="mac-window-header-button btn-green"></div>
            </div>
            <p className="mac-window-header-title text-gray-300">~/Desktop/PortfolioV3</p>
          </div>
          <h1 className="text-blue-500 mt-4">➜  <span className="text-blue-200">PortfolioV3</span> git:(<span className="text-red-500">main</span>) <span className="text-yellow-500">✗</span> <span className="text-white text-2xl">$ pwd</span></h1>
            <div className='leading-tight pt-2'>
              ├── src/<br></br>
              │   ├── <a href='/projects'><span className='text-xl font-bold text-white hover:text-gray-400'>Projects ↘</span></a><br></br>
              │   └── <a href='/About'><span className='text-xl font-bold text-white hover:text-gray-400'>About ↘</span></a><br></br>
              └── <a><span className='text-xl font-bold text-white hover:text-gray-400'>GitHub ↘</span></a><br></br>
            </div>
        </div>
      </Draggable>
      {/* //////// MAC-WINDOW-LANGUAGES END ////////*/}
      {/* //////////////////////////////////////// */}
      {/* //////// MAC-WINDOW-PURPLE ////////*/}
      <Draggable>
        <div className="mockup-code-1-master">
          <div className="mockup-code bg-primary text-primary-content max-w-xs absolute top-12 right-10 mt-10 mr-5 cursor-grab select-none mockup-code-1 shadow-custom" onClick={() => handleWindowClick('mockup-code')}
            style={{
              zIndex: activeWindow === 'mockup-code' ? 6 : 0,
            }}>
            <div>
              <h1 className="mx-6"><h1>{">"}_ Drag Us!</h1></h1>
            </div>
            <div className='flex justify-center items-center'>
              <img src={myImage} alt="blob" className="drop-shadow-2xl user-select-none w-custom" />
            </div>
          </div>
        </div>
      </Draggable>
      {/* //////// MAC-WINDOW-PURPLE END ////////*/}
      {/* //////////////////////////////////////// */}
      {/* //////// MAC-WINDOW-YELLOW ////////*/}
      <Draggable>
        <div className="mockup-code-2-master">
          <div className="mockup-code bg-yellow-500 text-primary-content max-w-xs absolute top-12 right-10 mt-10 mr-5 cursor-grab select-none mockup-code-2 shadow-custom" onClick={() => handleWindowClick('mockup-code-2')}
            style={{
              zIndex: activeWindow === 'mockup-code' ? 6 : 0,
            }}>
            <div className="avatar flex justify-center items-center">
              <div className="w-custom rounded-full bg-stone-700">
                <img src="https://res.cloudinary.com/djr22sgp3/image/upload/v1680188751/4a996039caa33fd3569b0f2ef7010e1e-sticker_uiiyam.png" className="mt-2 scale-95"/>
              </div>
            </div>
          </div>
          </div>
      </Draggable>
      {/* //////// MAC-WINDOW-YELLOW END ////////*/}
    </div>
  );
};

export default Landing;
