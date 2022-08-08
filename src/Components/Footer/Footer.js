import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

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
      <div className="p-12 bg-neutral text-neutral-content">
          <h1>Services</h1>
        <div className="linksFooter">
          <Link to="/" className="link link-hover">Branding</Link>
          <Link to="/" className="link link-hover">Design</Link>
          <Link to="/" className="link link-hover">Marketing</Link>
          <Link to="/" className="link link-hover">Advertisement</Link>
        </div>
      </div>
      <Modal/>
    </>
  );
};

export default FooterWithLinks;
