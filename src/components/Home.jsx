import React from "react";
import "/Users/maxwtd/Desktop/PortfolioV3/src/assets/stylesheets/Home.css"
import myImage from '/Users/maxwtd/Desktop/PortfolioV3/src/assets/blob.png';

const Landing = () => {
  return (
    <div className="container">
      <div className="mac-window">
        <div className="mac-window-header">
          <div className="mac-window-header-button-master">
            <div className="mac-window-header-button btn-red"></div>
            <div className="mac-window-header-button btn-yellow"></div>
            <div className="mac-window-header-button btn-green"></div>
          </div>
          <p className="mac-window-header-title text-gray-300">~/Desktop/PortfolioV3</p>
        </div>
        <h1 className="text-white mt-4">Last login: Mon Mar 27 09:32:35</h1>
        <h1 className="text-blue-500 mt-4">➜  <span className="text-blue-200">PortfolioV3</span> git:(<span className="text-red-500">main</span>) <span className="text-yellow-500">✗</span> <span className="text-white text-4xl">Max W</span></h1>
        <h1 className="text-blue-500 ">➜  <span className="text-blue-200">PortfolioV3</span> git:(<span className="text-red-500">main</span>) <span className="text-yellow-500">✗</span> <span className="text-white text-xl">Full Stack Web Dev_</span></h1>
        <h1 className="text-blue-500 bottom-h1">➜  <span className="text-blue-200">PortfolioV3</span> git:(<span className="text-red-500">main</span>) <span className="text-yellow-500">✗</span><span className="blinking-bar text-1xl text-white font-black">  |  </span></h1>
      </div>
    </div>
  );
};

export default Landing;
