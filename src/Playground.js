import React from "react";
import "./Playground.css";
import Footer from "./Footer";
import p1 from "./images/playground/p1.png";
import p2 from "./images/playground/p2.png";
import p3 from "./images/playground/p3.png";
import p4 from "./images/playground/p4.png";
import p5 from "./images/playground/p5.png";

const Playground = () => {
  return (
    <div className="playground-container">
      <h1>playground: comic.</h1>
      <div className="comic-images">
        <img src={p1} alt="Comic 1" />
        <img src={p2} alt="Comic 2" />
        <img src={p3} alt="Comic 3" />
        <img src={p4} alt="Comic 4" />
        <img src={p5} alt="Comic 5" />
      </div>
      <Footer />
    </div>
  );
};

export default Playground;
