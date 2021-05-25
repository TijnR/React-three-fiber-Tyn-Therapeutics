import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'

import nyu from '../images/nyu.png'
import pfizer from '../images/pfizer.png'
import charles from '../images/charles.png'
import abbvie from '../images/abbvie.png'

const Sbanner = styled.section`
  padding: 75px 20px;
  background-color: ${colors.primary};
`

const Sinner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`

const Stitle = styled.h2`
  font-size: 50px;
  color: ${colors.white};
  font-family: 'Street Bold';
  font-weight: medium;
  width: 300px;

  @media (max-width: 950px) {
    text-align: center;
    padding-bottom: 50px;
  }
`

const SclientsContainer = styled.div`
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 950px) {
    justify-content: space-around;
  }
`

const SimageContainer = styled.div`
  padding-right: 60px;

  img {
    filter: brightness(10);
    margin: 0 auto;
  }

  @media (max-width: 950px) {
    padding: 10px;
  }
`

function Banner() {
  return (
    <Sbanner>
      <Sinner>
        <Stitle>Our R&D Partners</Stitle>
        <SclientsContainer>
          <SimageContainer>
            <img src={nyu} alt="nyu" style={{ width: '300px' }} />
          </SimageContainer>
          <SimageContainer>
            <img src={pfizer} alt="pfizer" style={{ width: '100px' }} />
          </SimageContainer>
          <SimageContainer>
            <img src={charles} alt="charles" style={{ width: '200px' }} />
          </SimageContainer>
          <SimageContainer>
            <img src={abbvie} alt="abbvie" style={{ width: '200px' }} />
          </SimageContainer>
        </SclientsContainer>
      </Sinner>
    </Sbanner>
  )
}

export default Banner
