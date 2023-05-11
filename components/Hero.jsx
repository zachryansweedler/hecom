import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <Wrapper>
      <GridItem left>
        <TextWrapper>
        <h1>HELPING YOU WITH ECOM</h1>
        <p>
          H is an e-commerce agency specializing in designing and developing
          high-converting, on-brand websites for mobile and web.
        </p>
        <button>EMAIL US</button>
        </TextWrapper>
      </GridItem>
      <GridItem color>
        <PhoneWrapper>
            <Image alt="" src="/phone.png" fill="true" style={{objectFit: 'contain', objectPosition: 'bottom'}}/>
        </PhoneWrapper>
      </GridItem>
    <PhoneWrapperMobile>
            <Image alt="" src="/phone.png" fill="true" style={{objectFit: 'contain', objectPosition: 'bottom'}}/>
        </PhoneWrapperMobile>
    </Wrapper>
  );
}

export default Hero;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  height: 100vh;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  align-items: start;
  justify-content: center;
  position: relative;
  padding: ${(props) => props.left ? '0px 30px' : '0px'};
  background: ${(props) => props.color ? 'linear-gradient(90deg, rgba(66, 0, 255, 0.2) 0.01%, rgba(255, 0, 0, 0.2) 100%)' : 'none'};
  @media screen and (max-width: 700px) {
    display: ${(props) => props.color ? 'none' : 'flex'};
  }
`;

const TextWrapper = styled.div`
    max-width: 500px;
    margin: auto;
    display: flex;
    align-items: flex-start;
    gap: 20px;
    flex-direction: column;
`

const PhoneWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80%;
    @media screen and (max-width: 700px) {
    }
`

const PhoneWrapperMobile = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80%;
    display: none;
    @media screen and (max-width: 700px) {
        transform: translateY(250px) translateX(50px) rotate(-30deg);
        display: flex;
        object-position: right;
    }
`