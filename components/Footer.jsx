import React from 'react'
import { Container, Para } from './Showcase'
import styled from 'styled-components'

function Footer() {
  return (
    <Wrapper>
        <Container>
            <FooterGrid>
                <FooterColumn lgGap>
                    <h2>H.</h2>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '9px'}}>
                        <h4>Subscribe to Customer Stories</h4>
                        <p>Get product updates, company news, and more.</p>
                    </div>
                    <button>SUBSCRIBE</button>
                </FooterColumn>
                <FooterColumn>
                    <Para>Product</Para>
                    <Para>Features</Para>
                    <Para>Security</Para>
                    <Para>Product</Para>
                    <Para>Team</Para>
                    <Para>Enterpise</Para>
                    <Para>Customer Stories</Para>
                    <Para>The ReadME Project</Para>
                    <Para>Pricing</Para>
                    <Para>Resources</Para>
                </FooterColumn>
                <FooterColumn>
                    <Para>Company</Para>
                    <Para>About</Para>
                    <Para>Blog</Para>
                    <Para>Careers</Para>
                    <Para>Press</Para>
                    <Para>Inclusion</Para>
                    <Para>Social Impact</Para>
                    <Para>Shop</Para>
                </FooterColumn>
            </FooterGrid>
        </Container>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  height: auto;
  padding: 0px 30px;
  background-color: #DECCF9;
`;

const FooterGrid = styled.div `
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-row-gap: 60px;
    }
`
const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.lgGap ? '30px' : '20px'};
    align-items: flex-start;
`