import React from 'react';
import tab from '../asset/tab.png';
import random from '../asset/random.png';
import tsp from '../asset/tsp.png';
import smallridman from '../asset/smallridman.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: tab,
      tag: 'eCommerce',
      description: "It's an eCommerce site designed with HTML, CSS, and JavaScript",
      demoLink: 'https://tabwears.netlify.app/',
      codeLink: 'https://github.com/Irenitemi97/E-commerce-',
    },
    {
      id: 2,
      src: tsp,
      tag: 'Photography Portfolio',
      description: "It's a portfolio site designed with HTML, CSS, and JavaScript",
      demoLink: ' https://irenitemi97.github.io/TSPupdated/',
      codeLink: 'https://github.com/Irenitemi97/TSPupdated',
    },
    {
      id: 3,
      src: random,
      tag: 'Get Advice',
      description: "It generates random advice within 3 seconds with just a click",
      demoLink: 'https://randomadviser.netlify.app/',
      codeLink: 'https://github.com/Irenitemi97/RANDOM-ADVISER',
    },
    {
      id: 4,
      src: smallridman,
      tag: 'Portfolio',
      description: "It's a portfolio site designed with HTML, CSS, and JavaScript",
      demoLink: 'https://www.smallridman.com/',
      codeLink: 'https://github.com/Irenitemi97/Smallridman',
    },
  ];

  return (
    <div name="portfolio" className='w-full md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div >
          <p className='text-4xl font-bold inline border-b-4 border-gray-800'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid h-70 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, tag, description, demoLink, codeLink }) => (
            <div key={id} className='shadow-md shadow-gray-800 rounded-lg'>
              <img src={src} alt="" className='rounded-md h-40 duration-200 hover:scale-95' />
              <p className='text-2xl font-bold px-2 py-2'>{tag}</p>
              <p className='px-2'>{description}</p>
              <div className='flex items-center justify-center'>
                <a href={demoLink} target='_blank' rel='noopener noreferrer' className='w-i/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  Demo
                </a>
                <a href={codeLink} target='_blank' rel='noopener noreferrer' className='w-i/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
