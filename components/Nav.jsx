import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

function Nav() {

  return (
    <Wrapper>
      <h3>H.</h3>
      <button>CONTACT</button>
    </Wrapper>
  )
}

export default Nav

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  width: 100vw;
  position: fixed;
  align-items: center;
  top: 0;
  z-index: 1000;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    background-color: #F6F6F6;
    z-index: 1000;
  }
`