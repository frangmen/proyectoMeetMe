import React from "react";
import ReadyPage from "../ReadyPage/ReadyPage";
import AboutUsBanner from "../AboutUs/AboutUs";

const Home = () => {
  return (
    <>
      <ReadyPage />
      <header className="App-header">
        <AboutUsBanner />
      </header>
    </>
  );
};

export default Home;
