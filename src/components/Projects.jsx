import { useEffect, useRef } from 'react';
import '/Users/maxwtd/Desktop/PortfolioV3/src/assets/stylesheets/Projects.css';

const Projects = () => {
  const carouselRef = useRef(null);
  const scrollerMasterRef = useRef(null);
  const sensitivityFactor = 40;

  useEffect(() => {
    const carouselElement = carouselRef.current;
    const scrollerMasterElement = scrollerMasterRef.current;

    if (!carouselElement || !scrollerMasterElement) {
      return;
    }

    const handleMouseWheel = (e) => {
      e.preventDefault();
      carouselElement.scrollLeft += e.deltaY * sensitivityFactor;
    };

    const scaleEffects = Array.from(document.getElementsByClassName("scale-effect"));

    const handleMouseEnter = () => {
      scrollerMasterElement.style.display = "none";
    };

    const handleMouseLeave = () => {
      scrollerMasterElement.style.display = "block";
    };

    scaleEffects.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    carouselElement.addEventListener('wheel', handleMouseWheel);

    return () => {
      carouselElement.removeEventListener('wheel', handleMouseWheel);
      scaleEffects.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  setTimeout(function() {
    document.getElementById("scroll-p").style.display = "block";
    document.getElementById("scroll-p").style.opacity = 0;

    setTimeout(function() {
      document.getElementById("scroll-p").style.transition = "opacity 3s ease-in";
      document.getElementById("scroll-p").style.opacity = 1;
    }, 10);
  }, 1000);
  setTimeout(function() {
    document.querySelector(".scroller-wheel").style.display = "block";
    document.querySelector(".scroller-wheel").style.opacity = 0;

    setTimeout(function() {
      document.querySelector(".scroller-wheel").style.transition = "opacity 3s ease-in";
      document.querySelector(".scroller-wheel").style.opacity = 1;
    }, 10);
  }, 500);

  return (
    <div className="container-projects">
      <div className="projects-title">
        <h1 className="text-white text-4xl mt-2">Projects</h1>
        <p className="text-white text-2xl mt-2">console.log<span className="text-blue-500">(</span>projects<span className="text-yellow-500">()</span><span className="text-blue-500">)</span>;</p>
      </div>
      <div className="mac-window-header-projects">
        <div className="mac-window-header-button-master-projects">
          <div className="mac-window-header-button-projects btn-red"></div>
          <div className="mac-window-header-button-projects btn-yellow"></div>
          <div className="mac-window-header-button-projects btn-green"></div>
        </div>
        <p className="mac-window-header-title-projects text-gray-300">~/Desktop/PortfolioV3/Projects</p>
      </div>
      <div ref={carouselRef} className="carousel carousel-center h-custom p-4 space-x-12 bg-stone-600/20 rounded-box mt-9 py-10 px-14">
        <div className="carousel-item">
          <div className="indicator">
            <div class="indicator-item indicator-middle indicator-center badge badge-primary mt-6 p-4 text-lg font-bold">
              <div ref={scrollerMasterRef} className='scroller-master'>
                <div class="scroller-wheel">
                  <a href="javascript:;" class="scroll-down mouse effect1">
                    <span id="scroll-down-span"></span>
                  </a>
                </div>
              </div>
                Hover + Scroll
            </div>
            <div style={{width:"75vw"}} className="carousel-intro-div rounded-box bg-stone-800"></div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="indicator">
            <span className="indicator-item indicator-start badge badge-primary ml-14 p-4 text-lg font-bold">Finlit</span>
            <a href="/"><span class="transform hover:scale-110 hover:bg-stone-500 cursor-pointer indicator-item indicator-middle indicator-center badge badge-primary mt-custom p-4 text-lg font-bold">View</span></a>
            <video src="https://res.cloudinary.com/djr22sgp3/video/upload/v1680082834/Finlit_showreel_b23klk.mp4" style={{width:"75vw"}} className="rounded-box scale-effect object-cover" autoPlay loop muted />
          </div>
        </div>
        <div className="carousel-item">
          <div className="indicator">
            <span className="indicator-item indicator-start badge badge-primary ml-14 p-4 text-lg font-bold">Tumbuka</span>
            <span class="transform hover:scale-110 hover:bg-stone-500 cursor-pointer indicator-item indicator-middle indicator-center badge badge-primary mt-custom p-4 text-lg font-bold">View</span>
            <video src="https://res.cloudinary.com/djr22sgp3/video/upload/v1680075752/Tumbuka_showreel_uvw7cm.mp4" style={{width:"75vw"}} className="rounded-box scale-effect object-cover" autoPlay loop muted />
          </div>
        </div>
        <div className="carousel-item">
          <div className="indicator">
            <span className="indicator-item indicator-start badge badge-primary ml-14 p-4 text-lg font-bold">Tumbuka</span>
            <span class="transform hover:scale-110 hover:bg-stone-500 cursor-pointer indicator-item indicator-middle indicator-center badge badge-primary mt-custom p-4 text-lg font-bold">View</span>
            <video src="https://res.cloudinary.com/djr22sgp3/video/upload/v1680075752/Tumbuka_showreel_uvw7cm.mp4" style={{width:"75vw"}} className="rounded-box scale-effect object-cover" autoPlay loop muted />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
