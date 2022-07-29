import React from "react";
import { Footer } from "react-daisyui";
import { Link } from "react-router-dom";

const FooterWithLinks = () => {
  return (
    <>
      <div className="m-5">
        <h2 className="mb-4 text-2xl text-green-700 font-bold">Select</h2>
        <select
          data-choose-theme
          className="focus:outline-none h-10 rounded-full px-3 border"
        >
          <option value="">Default</option>
          <option value="dark">Dark</option>
          <option value="black">Black</option>
          <option value="🌸">🌸 Pink</option>
          <option value="🐬">🐬 Blue</option>
          <option value="🐤">🐤 Yellow</option>
        </select>
      </div>
      <Footer className="p-12 bg-neutral text-neutral-content">
        <div>
          <Footer.Title>Services</Footer.Title>
          <Link to="/" className="link link-hover">Branding</Link>
          <Link to="/" className="link link-hover">Design</Link>
          <Link to="/" className="link link-hover">Marketing</Link>
          <Link to="/" className="link link-hover">Advertisement</Link>
        </div>
      
      </Footer>
    </>
  );
};

export default FooterWithLinks;
