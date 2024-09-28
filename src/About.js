import React from "react";
import "./About.css";
import Judy from "./images/about/judy.png";
import m1 from "./images/about/m1.jpeg";
import m2 from "./images/about/m2.png";
import m3 from "./images/about/m3.png";
import m4 from "./images/about/m4.jpeg";
import m5 from "./images/about/m5.png";
import m6 from "./images/about/m6.png";
import m7 from "./images/about/m7.png";
import m8 from "./images/about/m8.jpg";
import m9 from "./images/about/m9.jpeg";
import m10 from "./images/about/m10.png";
import m11 from "./images/about/m11.png";
import m12 from "./images/about/m12.png";
import Slider from "react-slick";
import Footer from "./Footer";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="about-container">
      <h1>about me.</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I’m Judy, a fourth-year computer science student at UBC. I’m
            passionate about designing <strong>user-centric products</strong>{" "}
            and have developed a strong interest in{" "}
            <strong>UX/UI design</strong> through my{" "}
            <strong>web development</strong> experience. I focus on creating{" "}
            <strong>functional</strong>, <strong>accessible</strong>, and{" "}
            <strong>visually appealing</strong> interfaces by empathizing with{" "}
            <strong>users' needs</strong>.
          </p>
          <p>
            In my free time, I enjoy <strong>hackathons</strong> and{" "}
            <strong>designathons</strong>, as well as exploring{" "}
            <strong>Vancouver’s food scene</strong>, listening to{" "}
            <strong>music</strong> and <strong>podcasts</strong>, watching{" "}
            <strong>TV shows</strong>, and hanging out with{" "}
            <strong>friends</strong>.
          </p>
        </div>
        <div className="about-image">
          <img src={Judy} alt="Judy" />
        </div>
      </div>
      <hr className="separator" />

      <h2>about me: mauritius.</h2>
      <p>
        Introducing Mauritius, my beloved home country! This small island nation
        in the Indian Ocean is a tropical paradise with pristine beaches,
        turquoise waters, and stunning sunrises/sunsets.
      </p>

      <Slider {...settings}>
        <div>
          <img src={m1} alt="Mauritius 1" />
        </div>
        <div>
          <img src={m2} alt="Mauritius 2" />
        </div>
        <div>
          <img src={m3} alt="Mauritius 3" />
        </div>
        <div>
          <img src={m4} alt="Mauritius 4" />
        </div>
      </Slider>
      <br />
      <p>
        There is also a rich cultural blend, where diverse traditions and
        mouthwatering cuisine come together in harmony.
      </p>
      <Slider {...settings}>
        <div>
          <img src={m5} alt="Mauritius 5" />
        </div>
        <div>
          <img src={m6} alt="Mauritius 6" />
        </div>
        <div>
          <img src={m7} alt="Mauritius 7" />
        </div>
        <div>
          <img src={m8} alt="Mauritius 8" />
        </div>
      </Slider>
      <br />
      <hr className="separator" />
      <h2>about me: food.</h2>
      <p>
        When I'm not busy designing, you'll probably spot me exploring random
        food places in Vancouver. I’m a big foodie 🍰🍣🥟 since Vancouver is not
        my home country, I find myself hopping around cute cafes and new
        restaurants every weekend. I also enjoy taking pictures of the food I
        taste (bonus points if the food looks aesthetic). Here, I'm sharing some
        of the amazing dishes I've had the pleasure of tasting.
      </p>

      <Slider {...settings}>
        <div>
          <img src={m9} alt="Mauritius 9" />
        </div>
        <div>
          <img src={m10} alt="Mauritius 10" />
        </div>
        <div>
          <img src={m11} alt="Mauritius 11" />
        </div>
        <div>
          <img src={m12} alt="Mauritius 12" />
        </div>
      </Slider>
      <br />
      <Footer />
    </div>
  );
};
// Custom arrow components
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

export default About;
