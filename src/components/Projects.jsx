import { useEffect, useRef } from 'react';
import '/Users/maxwtd/Desktop/PortfolioV3/src/assets/stylesheets/Projects.css';

const Projects = () => {
  const carouselRef = useRef(null);
  const scrollerMasterRef = useRef(null);
  const sensitivityFactor = 10;

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
  }, 2000);
  setTimeout(function() {
    document.querySelector(".scroller-wheel").style.display = "block";
    document.querySelector(".scroller-wheel").style.opacity = 0;

    setTimeout(function() {
      document.querySelector(".scroller-wheel").style.transition = "opacity 3s ease-in";
      document.querySelector(".scroller-wheel").style.opacity = 1;
    }, 10);
  }, 1000);

  return (
    <div className="container-projects">
      <div className="projects-title">
        <h1 className="text-white text-4xl mt-2">Projects</h1>
        <p className="text-white text-2xl mt-2">console.log<span className="text-blue-500">(</span>projects<span className="text-yellow-500">()</span><span className="text-blue-500">)</span>;</p>
      </div>
      <div ref={scrollerMasterRef} className='scroller-master'>
        <div class="scroller-wheel">
          <a href="javascript:;" class="scroll-down mouse effect1">
            <span id="scroll-down-span"></span>
          </a>
        </div>
        <p id="scroll-p">Scroll</p>
      </div>
      <div className="mac-window-header-projects">
        <div className="mac-window-header-button-master-projects">
          <div className="mac-window-header-button-projects btn-red"></div>
          <div className="mac-window-header-button-projects btn-yellow"></div>
          <div className="mac-window-header-button-projects btn-green"></div>
        </div>
        <p className="mac-window-header-title-projects text-gray-300">~/Desktop/PortfolioV3/Projects</p>
      </div>
      <div ref={carouselRef} className="carousel carousel-center max-w-full max-h-custom p-4 space-x-8 bg-stone-400/20 rounded-box mt-5 pt-custom px-14 pb-7 ">
        <div className="carousel-item">
          {/* <h1 className="text-white text-3xl">Finlit</h1> */}
          <img src="https://res.cloudinary.com/djr22sgp3/image/upload/v1680014365/Screenshot_2023-03-19_at_17.55.13_iaa2th.png" style={{width:"75vw"}} className="rounded-box scale-effect object-cover" />
        </div>
        <div className="carousel-item">
          {/* <img src="https://images.unsplash.com/photo-1678537378341-f9a017d75515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" style={{width:"75vw"}} className="rounded-box scale-effect object-cover" /> */}
          <video src="https://res.cloudinary.com/djr22sgp3/video/upload/v1680075752/Tumbuka_showreel_uvw7cm.mp4" style={{width:"75vw"}} className="rounded-box scale-effect object-cover" autoPlay loop muted />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1678537378341-f9a017d75515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" style={{width:"75vw"}} className="rounded-box scale-effect object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
