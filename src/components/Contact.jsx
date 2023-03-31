import React, { useState } from 'react';
import Draggable from "react-draggable";
import "/Users/maxwtd/Desktop/PortfolioV3/src/assets/stylesheets/Contact.css"

const Contact = () => {
  const [activeWindow, setActiveWindow] = useState('');

  const handleWindowClick = (windowName) => {
    setActiveWindow(windowName);
  };
  return (
    <div className="container">
      <Draggable>
        <div className="mac-window-3 cursor-grab" onClick={() => handleWindowClick('mac-window-3')}
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
          <h1 className="text-white mt-4">Last login: Mon Mar 27 09:32:35</h1>
          <h1 className="text-blue-500 mt-4">➜  <span className="text-blue-200">PortfolioV3</span> git:(<span className="text-red-500">main</span>) <span className="text-yellow-500">✗</span> <span className="text-white text-2xl">$ pwd</span></h1>
            <div className='leading-tigh pt-4'>
              <h1>~ Languages and Technologies</h1>
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
              ├── <span className='font-bold text-white'>Heroku</span><br></br>
              └── <span className='font-bold text-white'>Postman</span><br></br>
            </div>
        </div>
      </Draggable>
      <h2 className="text-white">Contact</h2>
      <p className="text-white">This is the contact page of the application.</p>
      <label htmlFor="my-modal-6" className="btn">open modal</label>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <figure><img src="https://res.cloudinary.com/djr22sgp3/image/upload/v1678966463/Finlit_Logo_-_6_sbolgj.png" class="rounded-box" /></figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
