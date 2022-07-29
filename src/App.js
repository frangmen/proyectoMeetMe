import "./App.css";

import NavBarNavigation from "./Components/NavBar/NavBar";
import FooterWithLinks from "./Components/Footer/Footer";

import { useEffect } from "react";
import { themeChange } from "theme-change";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";

const App = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <NavBarNavigation />


        <Routes>

          <Route path="/" element={<Home />} />
          
        </Routes>


      <FooterWithLinks />
      </BrowserRouter>
    </div>
  );
};

export default App;
