import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import EcoPantry from "./EcoPantry";
import ByteBroom from "./ByteBroom";
import Atlas from "./Atlas";
import Scarp from "./Scarp";
import About from "./About";
import Playground from "./Playground";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/ecopantry" element={<EcoPantry />} />
          <Route path="/bytebroom" element={<ByteBroom />} />
          <Route path="/atlas" element={<Atlas />} />
          <Route path="/scarp" element={<Scarp />} />
          <Route path="/resume" element={<Portfolio />} />{" "}
          {/* Adjust as necessary */}
          <Route path="/playground" element={<Playground />} />{" "}
          {/* Adjust as necessary */}
          <Route path="/about" element={<About />} />{" "}
          {/* Adjust as necessary */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
