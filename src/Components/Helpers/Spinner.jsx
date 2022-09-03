import React from "react";
import ClockLoader from "react-spinners/ClockLoader";
import './loader.css'

const Spinner = () => {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-lg">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <div className="loader">
          <ClockLoader size={150}/>
          </div>
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">TRUE LOVE EXISTS</h5>
          <p className="text-gray-700 text-base mb-4">GETTING READY</p>
          <button
            type="button"
            disabled="yes"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md   "
          >
            ONLY A FEW SECONDS AWAY FROM FINDING YOUR TRUE LOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
