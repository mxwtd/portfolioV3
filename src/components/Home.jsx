import React, { useState } from 'react';
import Draggable from "react-draggable";
import { Link } from 'react-router-dom';
import "../assets/stylesheets/Home.css";
// import myImage from "../assets/blob.png";

const Landing = () => {
    const [activeWindow, setActiveWindow] = useState(null);
    const [holdTimer, setHoldTimer] = useState(null);
    const [isDraggableEnabled, setIsDraggableEnabled] = useState(true);

    const handleWindowClick = (windowName) => {
      setActiveWindow(windowName);
    };

    const handleDragStart = (e) => {
      if (window.innerWidth < 1000) {
        setIsDraggableEnabled(false);
        setHoldTimer(
          setTimeout(() => {
            setIsDraggableEnabled(true);
          }, 500)
        );
      }
    };

    const handleDragStop = () => {
      clearTimeout(holdTimer);
    };

  return (
    <div className="container-home">
      <div className="projects-title">
        <h1 className="text-white text-4xl mt-6 ml-10 min-w-full home-title"><span className='bg-stone-700/75 p-3 rounded-box'>Portfolio<span className="text-yellow-500">()</span>;</span></h1>
      </div>
      <div className='all-windows-master flex flex-row w-full min-h-[100%] md:flex-row flex-wrap'>
        <div className='mockup-master flex items-center justify-center flex-col gap-7 basis-1/3 mt-5'>
          {/* //////////////////////////////////////// */}
          {/* //////// MAC-WINDOW-YELLOW ////////*/}
          <Draggable onStart={handleDragStart} onStop={handleDragStop} disabled={!isDraggableEnabled}>
            <div className="mockup-code-2-master" onClick={() => handleWindowClick('mockup-code-2-master')}
              style={{
                zIndex: activeWindow === 'mockup-code-2-master' ? 6 : 0,
              }}>
              <div className="mockup-code bg-orange-700/50 w-custom text-primary-content cursor-grab select-none mockup-code-2 shadow-custom">
                <div className="avatar flex justify-center items-center">
                  <div className="avatar-div w-custom rounded-full bg-stone-200/75">
                    <img src="https://res.cloudinary.com/djr22sgp3/image/upload/v1680188751/4a996039caa33fd3569b0f2ef7010e1e-sticker_uiiyam.png" className="mt-2 scale-95"/>
                  </div>
                </div>
              </div>
              </div>
          </Draggable>
          {/* //////// MAC-WINDOW-YELLOW END ////////*/}
          {/* ////////////////////////////////////// */}
          {/* //////// MAC-WINDOW-PURPLE ////////*/}
          <Draggable onStart={handleDragStart} onStop={handleDragStop} disabled={!isDraggableEnabled}>
            <div className="mockup-code-1-master" onClick={() => handleWindowClick('mockup-code-1-master')}
              style={{
                zIndex: activeWindow === 'mockup-code-1-master' ? 6 : 0,
              }}>
              <div className="mockup-code bg-orange-700/50 w-custom text-primary-content cursor-grab select-none mockup-code-1 shadow-custom">
                <div className='flex flex-col items-center mt-5 gap-3'>
                  <div className='rounded-box bg-stone-200/75 w-[90%] p-3'>
                    <p className='text-stone-700 font-extrabold  text-left'>🧑‍💻 Junior Full Stack Dev.</p>
                  </div>
                  <div className='rounded-box bg-stone-200/75 w-[90%] p-3'>
                    <p className='text-stone-700 font-extrabold text-left'>📍 Based in London.</p>
                  </div>
                  <div className='rounded-box bg-stone-200/75 w-[90%] p-3'>
                    <p className='text-stone-700 font-extrabold text-left'>📡 I Speak English & French.</p>
                  </div>
                </div>
              </div>
            </div>
          </Draggable>
          {/* //////// MAC-WINDOW-PURPLE END ////////*/}
          {/* //////////////////////////////////////// */}
        </div>
        {/* //////////////////////////////////////// */}
        {/* //////// MAC-WINDOW-TERMINAL ////////*/}
        <div className='mac-windows-master basis-2/3 mt-16 md:flex-row flex-wrap'>
          <Draggable onStart={handleDragStart} onStop={handleDragStop} disabled={!isDraggableEnabled}>
            <div className="mac-window cursor-grab w-[85%] h-[60%] shadow-custom p-8 rounded-box mt-6" onClick={() => handleWindowClick('mac-window')}
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
              <h1 className="text-blue-500 mt-4">➜{" "}<span className="text-blue-200">PortfolioV3</span> git:(<span className="text-red-500">main</span>){" "}<span className="text-yellow-500">✗</span>{" "}<span className="text-white text-4xl git-intro">Max W</span></h1>
              <h1 className="text-blue-500 ">➜{" "}<span className="text-blue-200">PortfolioV3</span> git:(<span className="text-red-500">main</span>){" "}<span className="text-yellow-500">✗</span>{" "}<span className="text-white text-xl git-intro">Full Stack Web Dev_</span></h1>
              <h1 className="text-blue-500 bottom-h1">➜{" "}<span className="text-blue-200">PortfolioV3</span> git:(<span className="text-red-500">main</span>){" "}<span className="text-yellow-500">✗</span><span className="blinking-bar text-1xl text-white font-black">{" "}|{" "}</span></h1>
            </div>
          </Draggable>
          {/* //////// MAC-WINDOW-TERMINAL END ////////*/}
          {/* //////////////////////////////////////// */}
          {/* //////// MAC-WINDOW-LANGUAGES ////////*/}
          <Draggable onStart={handleDragStart} onStop={handleDragStop} disabled={!isDraggableEnabled}>
            <div className="mac-window-2 cursor-grab w-[60%] p-8 rounded-box shadow-custom" onClick={() => handleWindowClick('mac-window-2')}
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
                │   ├── <Link to='/projects'><span className='sm:text-md md:text-xl font-bold text-white hover:text-gray-400'>Projects ↘</span></Link><br></br>
                │   └── <Link to='/About'><span className='text-xl font-bold text-white hover:text-gray-400'>About ↘</span></Link><br></br>
                └── <a href='https://github.com/mxwtd'><span className='text-xl font-bold text-white hover:text-gray-400'>GitHub ↘</span></a><br></br>
              </div>
            </div>
          </Draggable>
        {/* //////// MAC-WINDOW-LANGUAGES END ////////*/}
        {/* //////////////////////////////////////// */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
