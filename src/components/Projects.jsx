import { useEffect, useRef, useState } from 'react';
import "../assets/stylesheets/Projects.css";
import ProjectDetails from "../components/ProjectDetails.jsx";

const Projects = () => {
  const carouselRef = useRef(null);
  const scrollerMasterRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  // /////// SCROLL WHEEL FADE IN /////////

  setTimeout(function() {
    document.querySelector(".scroller-wheel").style.display = "block";
    document.querySelector(".scroller-wheel").style.opacity = 0;

    setTimeout(function() {
      document.querySelector(".scroller-wheel").style.transition = "opacity 3s ease-in";
      document.querySelector(".scroller-wheel").style.opacity = 1;
    }, 10);
  }, 500);

  // /////// Project Info Conditional /////////

  const handleViewClick = (project) => {
    setSelectedProject(project);
    setShowProjectDetails(true);
  };

  return (
    <div className="container-projects">
      <div className="projects-title">
        <h1 className="text-white text-4xl">Projects</h1>
        <p className="text-white text-2xl mt-1">console.log<span className="text-blue-500">(</span>projects<span className="text-yellow-500">()</span><span className="text-blue-500">)</span>;</p>
      </div>
      <div className="flex justify-center w-full relative mt-5 gap-6">
        <p>{"<"}</p>
        <a className="btn btn-xs" href="#item1" onClick={(e) => {
            e.preventDefault();
            carouselRef.current.scrollTo({ left: carouselRef.current.clientWidth, top: 0, behavior: 'smooth' });
        }}>1</a>
        <a className="btn btn-xs" href="#item2" onClick={(e) => {
            e.preventDefault();
            carouselRef.current.scrollTo({ left: carouselRef.current.clientWidth * 2, top: 0, behavior: 'smooth' });
        }}>2</a>
        <a className="btn btn-xs" href="#item3" onClick={(e) => {
            e.preventDefault();
            carouselRef.current.scrollTo({ left: carouselRef.current.clientWidth * 3, top: 0, behavior: 'smooth' });
        }}>3</a>
        <a className="btn btn-xs" href="#item4" onClick={(e) => {
            e.preventDefault();
            carouselRef.current.scrollTo({ left: carouselRef.current.clientWidth * 4, top: 0, behavior: 'smooth' });
        }}>4</a>
        <a className="btn btn-xs" href="#item5" onClick={(e) => {
            e.preventDefault();
            carouselRef.current.scrollTo({ left: carouselRef.current.clientWidth * 5, top: 0, behavior: 'smooth' });
        }}>5</a>
        <a className="btn btn-xs" href="#item6" onClick={(e) => {
            e.preventDefault();
            carouselRef.current.scrollTo({ left: carouselRef.current.clientWidth * 6, top: 0, behavior: 'smooth' });
        }}>6</a>
        <a className="btn btn-xs" href="#item7" onClick={(e) => {
            e.preventDefault();
            carouselRef.current.scrollTo({ left: carouselRef.current.clientWidth * 7, top: 0, behavior: 'smooth' });
        }}>7</a>
        <p>{">"}</p>
      </div>
      {showProjectDetails && (
        <div className="mockup-code mockup-code-4 mt-8 bg-stone-500 min-h-full">
          <ProjectDetails
            project={selectedProject}
            onClose={() => setShowProjectDetails(false)}
          />
        </div>
      )}
      {!showProjectDetails && (
        <div ref={carouselRef} className="carousel carousel-center h-custom p-4 space-x-12 bg-stone-600/20 rounded-box mt-9 py-10 px-14">
          <div className="carousel-item shadow-custom">
            <div className="indicator">
              <div className="indicator-item indicator-middle indicator-center badge badge-primary mt-6 p-4 text-lg font-bold scroll-indicator">
                <div ref={scrollerMasterRef} className='scroller-master'>
                  <div className="scroller-wheel">
                    <div className='flex flex-col gap-2'>
                      <a href="javascript:;" className="scroll-down mouse effect1">
                        <span id="scroll-down-span" className='move-test'></span>
                      </a>
                      <p className='rotate-90 text-2xl font-thin'>/</p>
                      <kbd className="kbd bg-transparent rotate-90">{"<"}</kbd>
                      <kbd className="kbd bg-transparent rotate-90">{">"}</kbd>
                    </div>
                  </div>
                </div>
                  Swipe / Click + Use Keys
              </div>
              <div style={{width:"75vw"}} className="carousel-intro-div rounded-box bg-stone-800"></div>
            </div>
          </div>
          <div id="item1" className="carousel-item shadow-custom">
            <div className="indicator">
              <span className="indicator-item indicator-start badge badge-primary ml-14 p-4 text-lg font-bold">Finlit</span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  handleViewClick('Finlit');
                }}
                className="transform hover:scale-110 hover:bg-stone-500 cursor-pointer indicator-item indicator-middle indicator-center badge badge-primary mt-custom p-4 text-lg font-bold"
              >
                View
              </span>
              <video src="https://res.cloudinary.com/djr22sgp3/video/upload/v1680082834/Finlit_showreel_b23klk.mp4" style={{width:"75vw"}} className="rounded-box scale-effect object-cover" autoPlay loop muted playsInline webkit-playsinline="true" />
            </div>
          </div>
          <div id="item2" className="carousel-item shadow-custom">
            <div className="indicator">
              <span className="indicator-item indicator-start badge badge-primary ml-14 p-4 text-lg font-bold">Friendify</span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  handleViewClick('Friendify');
                }}
                className="transform hover:scale-110 hover:bg-stone-500 cursor-pointer indicator-item indicator-middle indicator-center badge badge-primary mt-custom p-4 text-lg font-bold"
              >
                View
              </span>
              <video src="https://res.cloudinary.com/djr22sgp3/video/upload/v1680464001/Friendify_showreel_hemzxd.mp4" style={{width:"75vw"}} className="rounded-box scale-effect object-cover" autoPlay loop muted playsInline webkit-playsinline="true" />
            </div>
          </div>
          <div id="item3" className="carousel-item shadow-custom">
            <div className="indicator">
              <span className="indicator-item indicator-start badge badge-primary ml-14 p-4 text-lg font-bold">Tumbuka</span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  handleViewClick('Tumbuka');
                }}
                className="transform hover:scale-110 hover:bg-stone-500 cursor-pointer indicator-item indicator-middle indicator-center badge badge-primary mt-custom p-4 text-lg font-bold"
              >
                View
              </span>
              <video src="https://res.cloudinary.com/djr22sgp3/video/upload/v1680075752/Tumbuka_showreel_uvw7cm.mp4" style={{width:"75vw"}} className="rounded-box scale-effect object-cover" autoPlay loop muted playsInline webkit-playsinline="true" />
            </div>
          </div>
          <div id="item4" className="carousel-item shadow-custom">
            <div className="indicator">
              <span className="indicator-item indicator-start badge badge-primary ml-14 p-4 text-lg font-bold">Portfolio</span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  handleViewClick('Portfolio');
                }}
                className="transform hover:scale-110 hover:bg-stone-500 cursor-pointer indicator-item indicator-middle indicator-center badge badge-primary mt-custom p-4 text-lg font-bold"
              >
                View
              </span>
              <video src="https://res.cloudinary.com/djr22sgp3/video/upload/v1681895178/Portfolio_showreel_llmd8y.mp4" style={{width:"75vw"}} className="rounded-box scale-effect object-cover" autoPlay loop muted playsInline webkit-playsinline="true" />
            </div>
          </div>
          <div id="item5" className="carousel-item shadow-custom">
            <div className="indicator">
              <span className="indicator-item indicator-start badge badge-primary ml-14 p-4 text-lg font-bold">Country Index</span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  handleViewClick('Country_Index');
                }}
                className="transform hover:scale-110 hover:bg-stone-500 cursor-pointer indicator-item indicator-middle indicator-center badge badge-primary mt-custom p-4 text-lg font-bold"
              >
                View
              </span>
              <video src="https://res.cloudinary.com/djr22sgp3/video/upload/v1681895158/Flags_showreel_xqsa9d.mp4" style={{width:"75vw"}} className="rounded-box scale-effect object-cover" autoPlay loop muted playsInline webkit-playsinline="true" />
            </div>
          </div>
          <div id="item6" className="carousel-item shadow-custom">
            <div className="indicator">
              <span className="indicator-item indicator-start badge badge-primary ml-14 p-4 text-lg font-bold">Airport Index</span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  handleViewClick('Airport_Index');
                }}
                className="transform hover:scale-110 hover:bg-stone-500 cursor-pointer indicator-item indicator-middle indicator-center badge badge-primary mt-custom p-4 text-lg font-bold"
              >
                View
              </span>
              <video src="https://res.cloudinary.com/djr22sgp3/video/upload/v1681895155/Airport_Index_showreel_mt2fbw.mp4" style={{width:"75vw"}} className="rounded-box scale-effect object-cover" autoPlay loop muted playsInline webkit-playsinline="true" />
            </div>
          </div>
          <div id="item7" className="carousel-item shadow-custom">
            <div className="indicator">
              <span className="indicator-item indicator-start badge badge-primary ml-14 p-4 text-lg font-bold">QR Code Gen</span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  handleViewClick('QR_Code_Gen');
                }}
                className="transform hover:scale-110 hover:bg-stone-500 cursor-pointer indicator-item indicator-middle indicator-center badge badge-primary mt-custom p-4 text-lg font-bold"
              >
                View
              </span>
              <video src="https://res.cloudinary.com/djr22sgp3/video/upload/v1681895154/Qr_Code_Generator_showreel_v4q4t5.mp4" style={{width:"75vw"}} className="rounded-box scale-effect object-cover" autoPlay loop muted playsInline webkit-playsinline="true" />
            </div>
          </div>
      </div>
      )}
    </div>
  );
};

export default Projects;
