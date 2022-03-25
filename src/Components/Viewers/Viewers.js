import React from "react";
import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/Assets/images/viewers-disney.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/Assets/videos/disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/Assets/images/viewers-pixar.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/Assets/videos/pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/Assets/images/viewers-marvel.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/Assets/videos/marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/Assets/images/viewers-starwars.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/Assets/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/Assets/images/viewers-national.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source
            src="/Assets/videos/national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
    </Container>
  );
};

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  padding-top: 56px;
  border-radius: 10px;
  /* height: 100%; */
  height: 100px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid white;
  cursor: pointer;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    object-fit: cover;
    opacity: 0;
  }

  :hover {
    video {
      opacity: 1;
    }
  }
`;
