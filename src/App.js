import React, {Suspense, lazy} from 'react';
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import FooterWithLinks from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NoMatch from "./Components/Pages/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { themeChange } from "theme-change";
import { useEffect } from "react";

const About = lazy(() => import("./Components/Pages/About"));
const Matching = lazy(() => import("./Components/Pages/Matching"));
const You = lazy(() => import("./Components/Pages/You"));
const Projects = lazy(() => import("./Components/Pages/Projects"));

const App = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="*" element={<NoMatch />} />
          <Route path="/" element={<Home />} />
          <Route path="/matching" element={<Suspense fallback={<h1>"Loading..."</h1>}><Matching/></Suspense>} />
          <Route path="/projects" element={<Suspense fallback={<h1>"Loading..."</h1>}><Projects/></Suspense>} />
          <Route path="/About" element={<Suspense fallback={<h1>"Loading..."</h1>}><About/></Suspense>} />
          <Route path="/you" element={<Suspense fallback={<h1>"Loading..."</h1>}><You/></Suspense>} />
        </Routes>

        <FooterWithLinks />
      </BrowserRouter>
    </div>
  );
};

export default App;
