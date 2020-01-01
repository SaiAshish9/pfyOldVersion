import React from "react";
import Slider from "react-slick";
import Fade from 'react-reveal';
import { TestimonialStyled } from "./homeStyled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <TestimonialStyled>
      <h2> Testimonial</h2>
      <Fade left>
      <div className="testimonial-block">
        <Slider {...settings} className="slider">
          <div className="slider-content">
            <h3>Testimonial</h3>
            <p>testimonial testimonial testimonial testimonial testimonial testimonial testimonial testimonial</p>
          </div>
          <div className="slider-content">
            <h3>Testimonial</h3>
            <p>testimonial testimonial testimonial testimonial testimonial testimonial testimonial testimonial</p>

          </div>
          <div className="slider-content">
            <h3>Testimonial</h3>
            <p>testimonial testimonial testimonial testimonial testimonial testimonial testimonial testimonial</p>

          </div>
          <div className="slider-content">
            <h3>Testimonial</h3>
            <p>testimonial testimonial testimonial testimonial testimonial testimonial testimonial testimonial</p>

          </div>
          <div className="slider-content">
            <h3>Testimonial</h3>
            <p>testimonial testimonial testimonial testimonial testimonial testimonial testimonial testimonial</p>

          </div>
          <div className="slider-content">
            <h3>Testimonial</h3>
            <p>testimonial testimonial testimonial testimonial testimonial testimonial testimonial testimonial</p>
          </div>
        </Slider>
      </div>
      </Fade>
    </TestimonialStyled>
  );
};

export default Testimonial;
