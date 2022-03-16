import React from "react";
import styled from "styled-components";
import Slider from "../Slider/Slide";

const Home = () => {
  return (
    <Container>
      <Slider />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  position: relative;

  :before {
    content: "Hello";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: url("/Assets/images/home-background.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
