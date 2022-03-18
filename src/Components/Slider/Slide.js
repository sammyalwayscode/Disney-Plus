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
    // centerMode: true,
  };
  return (
    <Holder>
      <Container {...settings}>
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
      </Container>
    </Holder>
  );
};

export default Slide;

const Holder = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Container = styled(Slider)`
  width: 90%;
  ul li button {
    &::before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }

    li.slick-active button:before {
      color: white;
    }

    .slick-list {
      overflow: visible;
    }

    button {
      z-index: 1;
    }
  }
`;

const MySlide = styled.div`
  height: 350px;
  width: 100%;
  background-color: darkcyan;
  border-radius: 10px;

  :hover {
    border: 3px solid #fff;
  }
`;

const MyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
