import AboutUsBanner from "../BannerAboutUs/AboutUsBanner";
import Confetti from "../Helpers/Confetti";
import React from "react";
import ModalReact from "../Modal/Modal";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">
            Start your free trial today❤
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <ModalReact />
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link to="./about">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
      <header className="App-header">
        <Confetti />
        <AboutUsBanner />
      </header>
    </div>
  );
};

export default Body;
