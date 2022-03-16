import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <MySlide>
          <MyImage src="/Assets/images/slider-badag.jpg" />
        </MySlide>
        <MySlide>
          <MyImage src="/Assets/images/slider-badging.jpg" />
        </MySlide>
        <MySlide>
          <MyImage src="/Assets/images/slider-scale.jpg" />
        </MySlide>
        <MySlide>
          <MyImage src="/Assets/images/slider-scales.jpg" />
        </MySlide>
      </Slider>
    </Container>
  );
};

export default Slide;

const Container = styled.div`
  height: 400px;
  width: 100%;
  background-color: blue;
`;

const MySlide = styled.div`
  height: 350px;
  width: 90%;
  background-color: darkcyan;
`;

const MyImage = styled.img``;
