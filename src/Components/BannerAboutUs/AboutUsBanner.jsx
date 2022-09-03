import React from "react";
import ModalReact from "../Modal/Modal";
import gif from '../../assets/download (2).gif'

const AboutUsBanner = () => {
  return (
    <>
      <div>
      ❤
        Meet is the first online dating platform using AI to match you with the
        best person available in the planet just for you ❤
      </div>
      <div className="inline-flex rounded-md shadow">
        <ModalReact/>
      </div>
      <div>You just need to register and start matching now!</div>
      <img
                        
                        src={gif}
                        alt="hola funca"
                      />
    </>
  );
};

export default AboutUsBanner;
