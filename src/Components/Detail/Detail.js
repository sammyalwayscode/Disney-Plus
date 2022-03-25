import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <BackGround>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt=""
        />
      </BackGround>
      <h1>Hello</h1>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;
const BackGround = styled.div``;
