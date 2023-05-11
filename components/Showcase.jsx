import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Showcase() {
  return (
    <Wrapper>
      <Container>
        <LogoWrapper>
          <p>SPECIALIZATIONS</p>
          <LogoGrid>
            <Image
              alt=""
              src="/shopify.svg"
              width="157"
              height="45"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
            <Image
              alt=""
              src="/big-commerce.svg"
              width="162"
              height="36"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
            <Image
              alt=""
              src="/webflow.svg"
              width="158"
              height="39"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
            <Image
              alt=""
              src="/squarespace.svg"
              width="227"
              height="32"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
            <Image
              alt=""
              src="/wix.svg"
              width="81"
              height="32"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </LogoGrid>
        </LogoWrapper>
        <VideoWrapper>
          <video
            muted
            autoPlay
            loop
            src="/ecom.mp4"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          ></video>
        </VideoWrapper>
        <TextWrapper>
          <Para>ABOUT</Para>
          <Heading>YOUR BRAND FOR THE DIGITAL WORLD</Heading>
          <Para fixedWidth>
            H is an e-commerce agency specializing in designing and developing
            high-converting, on-brand websites for mobile and web. We work with
            select clients and use a wide range of technologies, such as
            Shopify, Wix, Webflow, WooCommerce, and more, to create bespoke
            e-commerce solutions that align with their brand identity and
            business needs. Our team focuses on optimizing for speed, security,
            and ease of use while delivering exceptional customer service and
            support.
          </Para>
        </TextWrapper>
      </Container>
    </Wrapper>
  );
}

export default Showcase;

export const Wrapper = styled.div`
  height: auto;
  background-color: #F1E9E2;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  padding: 200px 30px;
  width: 100%;
  flex-direction: column;
  gap: 100px;
  margin: auto;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media screen and (max-width: 700px) {
    align-items: start;
    justify-content: start;
  }
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  align-content: center;
  justify-items: center;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-content: start;
    justify-items: start;
    grid-row-gap: 40px;
  }
`;

const VideoWrapper = styled.div`
  overflow: hidden;
  border-radius: 20px;
  height: 600px;
  box-shadow: 12px 12px 100px 1px rgba(0, 0, 0, 0.2);
`;

export const TextWrapper = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: auto;
  @media screen and (max-width: 700px) {
    align-items: start;
    max-width: 100%;
    margin: 0px;
  }
`;

const Heading = styled.h1`
  text-align: center;
  @media screen and (max-width: 700px) {
    text-align: left;
  }
`;

export const Para = styled.p`
  text-align: center;
  max-width: ${(props)=> props.fixedWidth ? '700px': 'auto'};
  @media screen and (max-width: 700px) {
    text-align: left;
  }
`;
