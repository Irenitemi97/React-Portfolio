import React from 'react';
import myImg from '../asset/myImg.jpg';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">I'm a Frontend Developer</h2>
          <p className="py-4 max-w-md">
            I have a year plus of experience building and designing software.
            Currently, I love to work on web applications using technologies like
            React.js, TypeScript, and Tailwind CSS.
          </p>

          <div>
            <Link to="portfolio" smooth duration={300}>
              <button
                className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio{' '}
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src={myImg} alt="" className="rounded-2xl animate-profile-animate mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
