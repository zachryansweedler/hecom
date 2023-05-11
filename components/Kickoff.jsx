import React from "react";
import { Container, Para, TextWrapper } from "./Showcase";
import styled from "styled-components";

function Kickoff() {
  return (
    <Wrapper>
      <Container>
        <TextWrapper>
          <Para>Ready?</Para>
          <h2>Lets Kickoff!</h2>
          <button>CONTACT US</button>
        </TextWrapper>
      </Container>
    </Wrapper>
  );
}

export default Kickoff;

const Wrapper = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  height: 600px;
  justify-content: center;
  @media screen and (max-width: 700px) {
    align-items: start;
    justify-content: start;
  }
`;

