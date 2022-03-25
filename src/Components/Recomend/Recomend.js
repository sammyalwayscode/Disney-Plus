import React from "react";
import styled from "styled-components";
import data from "../Data.json";
import { Link } from "react-router-dom";

const Recomend = () => {
  return (
    <Container>
      <h3>
        <strong>Recomended for you</strong>
      </h3>
      <Wrapper>
        {data?.map((props) => (
          <Main key={props.id1} to={`/detail/${props.id1}`}>
            <img src={props.cardImg} alt="" />
          </Main>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Recomend;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Main = styled(Link)`
  height: 200px;
  width: 100%;
  border-radius: 5px;

  :hover {
    border: 2px solid white;
    transition: all 400ms;
    transform: scale(1.05);
    cursor: pointer;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
