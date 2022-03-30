import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../Data.json";

const Detail = () => {
  const { id } = useParams();
  console.log(data[id - 1]);
  const newID = data[id - 1];

  console.log("This is the new id", newID);
  return (
    <Container>
      {
        <div>
          <BackGround>
            <img src={newID.backgroundImg} alt="" />
          </BackGround>
          <ImageTitle>
            <img src={newID.titleImg} alt="" />
          </ImageTitle>
          <SubTitle> {newID.subTitle} </SubTitle>
          <Description> {newID.description} </Description>
        </div>
      }
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  position: relative;
  display: block;
`;
const BackGround = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0.7;
`;

const ImageTitle = styled.div`
  padding: 24px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;
const SubTitle = styled.div`
  width: 40vw;
  padding: 24px;
`;
const Description = styled.div`
  padding: 24px;
  width: 40vw;
`;
