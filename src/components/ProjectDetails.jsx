import React from 'react';
import "/Users/maxwtd/Desktop/PortfolioV3/src/assets/stylesheets/ProjectDetails.css";

const ProjectDetails = ({ project }) => {
  // You can add more details about the projects here
  const projectData = {
    Finlit: {
      title: 'Finlit',
      description: 'A powerful Fullstack financial literacy and budgeting app.',
      content: "Finlit is a personal finance app that allows users to track their incomes, savings, and bank balances. The app features a dashboard that displays users' savings in a visually appealing way, as well as a learning section where users can read flashcards to improve their knowledge of personal finance. Additionally, Finlit uses the OpenAI API to power a chatbot that can answer any questions users have about personal finance.",
      technologies: "Ruby, Rails, JS, HTML, CSS, SCSS, PostgreSQL, Heroku, OpenAI API, Yahoo Finance API",
      vid: "https://res.cloudinary.com/djr22sgp3/video/upload/v1680082834/Finlit_showreel_b23klk.mp4",
      site: "https://www.finlit.dev",
      github: "https://github.com/Santiagospinai7/FINLIT"
    },
    Tumbuka: {
      title: 'Tumbuka',
      description: 'An E-commerce app for a small coffee roastery.',
      content: "Tumbuka is an e-commerce app for a small coffee roastery based in Southern France. The app allows users to browse the roastery's products, add them to their cart, and place orders. The app also features a dashboard that allows the roastery to manage their products and orders. The website ended up revoltionizing the roastery's business, allowing them to access a whole new market of users online.",
      technologies: "Wix, HTML, CSS, Wix Code, Wix Stores, Wix/Stripe Payments, Wix Data, Google Analytics",
      vid: "https://res.cloudinary.com/djr22sgp3/video/upload/v1680075752/Tumbuka_showreel_uvw7cm.mp4",
      site: "https://www.tumbuka-cafes.com/",
      github: "https://www.tumbuka-cafes.com/"
    }
  };

  const { title, description, technologies, content, vid, site, github } = projectData[project] || {};

  return (
    <div className='project-details-card px-10'>
      <div className='project-info-intro flex flex-row justify-between px-1 py-3 mb-4'>
        <div className='project-info-title'>
          <h2 className='text-5xl text-white'>{title}</h2>
          <p className='text-white'>{description}</p>
        </div>
        <div className='project-nav-btn-master flex flex-row mt-10 gap-3'>
          <a href='/projects'><span className='project-nav-btn text-xl font-bold bg-stone-800 text-white hover:text-gray-400 rounded-xl p-2'>{"<"} Back</span></a><br></br>
          <a href={site} target={'_blank'}><span className='project-nav-btn text-xl font-bold bg-stone-800 text-white hover:text-gray-400 rounded-xl p-2'>Live Site</span></a><br></br>
          <a href={github} target={'_blank'}><span className='project-nav-btn text-xl font-bold bg-stone-800 text-white hover:text-gray-400 rounded-xl p-2'>GitHub {">"}</span></a><br></br>
        </div>
      </div>
      <div className='project-info-card flex flex-row gap-10'>
        <video src={vid} style={{width:"60%"}} className="rounded-box object-cover h-custom3 shadow-custom" autoPlay loop muted />
        <div className='project-info-card-text flex flex-col gap-5 min-h-custom2 h-custom3'>
          <div className="mockup-code bg-primary text-primary-content max-w-lg  shadow-custom">
            <div className='px-5'>
              <h1 >Technologies used:</h1>
              <p>{technologies}</p>
            </div>
          </div>
          <div className="mockup-code bg-primary text-primary-content max-w-lg shadow-custom">
            <div className='px-5'>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
