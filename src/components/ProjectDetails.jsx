import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/stylesheets/ProjectDetails.css";

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
      technologies: "Wix, HTML, CSS, Wix Code (Velo), Wix Stores, Wix/Stripe Payments, Wix Data, Google Analytics",
      vid: "https://res.cloudinary.com/djr22sgp3/video/upload/v1680075752/Tumbuka_showreel_uvw7cm.mp4",
      site: "https://www.tumbuka-cafes.com/",
      github: "https://www.tumbuka-cafes.com/"
    },
    Friendify: {
      title: 'Friendify',
      description: 'A Social Media app that allows you to network and meet new friends.',
      content: "Friendify is a social media app that allows users to create profiles, make friends, and find activities nearby. The app features a dashboard that displays nearby activities, as well as a search bar that allows users to find specific activity categories or locations. The app also allows users to create and modify their own bookings, displaying useful info about bookings, such as date and price.",
      technologies: "Ruby, Rails, JS, HTML, CSS, SCSS, PostgreSQL, Heroku, Cloudinary API",
      vid: "https://res.cloudinary.com/djr22sgp3/video/upload/v1680464001/Friendify_showreel_hemzxd.mp4",
      site: "https://github.com/mxwtd/friendify",
      github: "https://github.com/mxwtd/friendify"
    },
    AltaAi: {
      title: 'Alta.ai',
      description: 'A code debugger that explains code line-by-line.',
      content: "Alta.ai was a simple static app, built with React and the Open Ai API, which allows users to copy/paste code into a search, then they receive a detailed explanation line-by-line of what the code does in plain english. The App was built with the text-davinci-003 model, which now isn't as effective at translating code than the GPT 3 & 4 models. In the future, I will adapt Alta.ai into a fullstack application.",
      technologies: "React, Javascript, HTML, CSS, Open AI API (TEXT-DAVINCI-003), Vite",
      vid: "https://res.cloudinary.com/djr22sgp3/video/upload/v1682352612/Alta.ai_showreel_wvz4sx.mp4",
      site: "https://github.com/mxwtd/altaV3",
      github: "https://github.com/mxwtd/altaV3"
    },
    Portfolio: {
      title: 'Portfolio',
      description: 'My personal Portfolio, Showcases work and skills.',
      content: "This is my personal portfolio, it showcases my work and skills. It was built using React, TailwindCSS, and Vite. I decided to build this portfolio a bit differently, I attempted to mimick Mac & Terminal windows to display information and my projects. The user can drag the windows around like on their own computer. It reflects my design philsophy as a developer, things that are simple, clean, and easy to use.",
      technologies: "React, Javascript, TailwindCSS, Vite, HTML, CSS, PostCSS, Netlify",
      vid: "https://res.cloudinary.com/djr22sgp3/video/upload/v1681895178/Portfolio_showreel_llmd8y.mp4",
      site: "https://www.maxwtd.com",
      github: "https://github.com/mxwtd/portfolioV3"
    },
    Country_Index: {
      title: 'Country Index',
      description: "A simple country index app that allows you to search for countries and view info.",
      content: "A simple static Front End App hosted on Github Pages that utilises the REST Countries API to display information about countries. The app allows you to search for countries and view information about them. Each query shows the country's flag, name, population, region, capital, and a currency. This was my first app built using a Rest Api, and it was a great learning experience. This app is responsive and works on all devices.",
      technologies: "HTML, Javascript, CSS, Rest Countries API, Github Pages, Postman",
      vid: "https://res.cloudinary.com/djr22sgp3/video/upload/v1681895158/Flags_showreel_xqsa9d.mp4",
      site: "https://mxwtd.github.io/countries_app/",
      github: "https://github.com/mxwtd/countries_app"
    },
    Airport_Index: {
      title: 'Airport Index',
      description: "A simple index app that allows you to search for any IATA or City to get Airport info.",
      content: "A simple static Front End App hosted on Github Pages that utilises a API to display information about Airports. The app allows you to search for Airport Names, Cities or IATAs in order to get more information. Each query shows the Airport's Country, IATA, Name, Size. This was my second time working with APIs, I hope to add more data to the results in the future. This app is responsive and works on all devices.",
      technologies: "HTML, Javascript, CSS, Flight Radar API, Github Pages, Postman",
      vid: "https://res.cloudinary.com/djr22sgp3/video/upload/v1681895155/Airport_Index_showreel_mt2fbw.mp4",
      site: "https://mxwtd.github.io/Airport-Index/",
      github: "https://github.com/mxwtd/Airport-Index"
    },
    QR_Code_Gen: {
      title: 'QR Code Gen',
      description: "A simple app that generates QR Codes.",
      content: "A simple static Front End App hosted on Github Pages that allows you to generate QR Codes. The app allows you to enter a URL and generate a QR Code for it. You can generate multiple sizes and pick your own colours, then finally you can download your designed QR Code. This was my first app built using a QR Code Generator API, and it was a great learning experience. This app is responsive and works on all devices.",
      technologies: "HTML, Javascript, CSS, Flight Radar API, Github Pages, Postman",
      vid: "https://res.cloudinary.com/djr22sgp3/video/upload/v1681895154/Qr_Code_Generator_showreel_v4q4t5.mp4",
      site: "https://mxwtd.github.io/QRGenerator/",
      github: "https://github.com/mxwtd/QRGenerator"
    }
  };

  const { title, description, technologies, content, vid, site, github } = projectData[project] || {};

  return (
    <div className='project-details-card px-4 sm:px-6 lg:px-8'>
      <div className='project-info-intro flex flex-col sm:flex-row justify-between px-1 py-3 mb-4'>
        <div className='project-info-title sm:w-1/2'>
          <h2 className='text-3xl sm:text-5xl text-white'>{title}</h2>
          <p className='text-white'>{description}</p>
        </div>
        <div className='project-nav-btn-master flex flex-row sm:w-1/2 lg:justify-end mt-4 sm:mt-10 gap-3'>
          <Link to='/projects' onClick={() => window.location.reload()}><span className='project-nav-btn text-lg font-bold bg-stone-800 text-white hover:text-gray-400 rounded-xl p-2'>{"<"} Back</span></Link><br></br>
          <a href={site} target={'_blank'}><span className='project-nav-btn text-lg font-bold bg-stone-800 text-white hover:text-gray-400 rounded-xl p-2'>Live Site</span></a><br></br>
          <a href={github} target={'_blank'}><span className='project-nav-btn text-lg font-bold bg-stone-800 text-white hover:text-gray-400 rounded-xl p-2'>GitHub {">"}</span></a><br></br>
        </div>
      </div>
      <div className='project-info-card flex flex-col lg:flex-row gap-10'>
        <video src={vid} className="rounded-box object-cover h-custom3 shadow-custom lg:w-[80vh]" autoPlay loop muted playsinline webkit-playsinline/>
        <div className='project-info-card-text flex flex-col gap-6 lg:w-1/2'>
          <div className="mockup-code mockup-code-project-info bg-primary text-primary-content max-w-lg shadow-custom">
            <div className='px-5'>
              <h1 >Technologies used:</h1>
              <p>{technologies}</p>
            </div>
          </div>
          <div className="mockup-code mockup-code-project-info bg-primary text-primary-content max-w-lg shadow-custom">
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
