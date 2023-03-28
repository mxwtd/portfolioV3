import { useEffect, useRef } from 'react';

const Projects = () => {
  const carouselRef = useRef(null);
  const sensitivityFactor = 3;

  useEffect(() => {
    const carouselElement = carouselRef.current;

    if (!carouselElement) {
      return;
    }

    const handleMouseWheel = (e) => {
      e.preventDefault();
      carouselElement.scrollLeft += e.deltaY * sensitivityFactor;
    };

    carouselElement.addEventListener('wheel', handleMouseWheel);

    return () => {
      carouselElement.removeEventListener('wheel', handleMouseWheel);
    };
  }, []);

  return (
    <div className="container">
      <div className="projects-title">
        <h1 className="text-white text-4xl">Projects</h1>
        <p className="text-white text-2xl mt-2">console.log<span className="text-blue-500">(</span>projects<span className="text-yellow-500">()</span><span className="text-blue-500">)</span>;</p>
      </div>
      <div ref={carouselRef} className="carousel carousel-center max-w-full max-h-96 p-4 space-x-4 bg-neutral rounded-box mt-5">
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1678537378341-f9a017d75515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" style={{width:"30rem"}} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1678537378341-f9a017d75515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" style={{width:"30rem"}} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1678537378341-f9a017d75515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" style={{width:"30rem"}} className="rounded-box" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
