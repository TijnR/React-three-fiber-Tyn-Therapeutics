import React from 'react'
import styled, { keyframes } from 'styled-components'
import { colors } from '../theme/colors'
import { ReactComponent as ReactLogo } from '../images/right-arrow.svg'

const Sbutton = styled.button`
  padding: 15px 40px;
  background-color: ${colors.primary};
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  background: linear-gradient(-45deg, transparent 15px, ${colors.primary} 0);
`

const SbuttonLabel = styled.span`
  font-family: 'Street Bold';
  font-size: 16px;
  color: ${colors.white};
  text-decoration: none;
  text-decoration-line: none;
  text-decoration-style: none;

  :visited {
    text-decoration: none;
  }
`
const SiconContainer = styled.div`
  width: 25px;
  padding-top: 3px;
  margin-left: 10px;

  svg,
  path {
    fill: ${colors.white};
  }
`

function Button() {
  return (
    <a
      style={{ display: 'inline-block' }}
      href={'https://nl.linkedin.com/in/tijn-roozen'}
    >
      <Sbutton>
        <SbuttonLabel>LEARN MORE</SbuttonLabel>
        <SiconContainer>
          <ReactLogo />
        </SiconContainer>
      </Sbutton>
    </a>
  )
}

const SHam = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${colors.primary};
  z-index: 32;
`

const rotateLeft = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
`

const rotateRight = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-45deg);
  }
`

const STopHam = styled(SHam)`
  position: absolute;
  background-color: ${colors.white};
  animation: 1s ${rotateLeft} ease-out forwards;
`

const SMiddleHam = styled(SHam)`
  display: none;
`

const SBottomHam = styled(SHam)`
  position: absolute;
  background-color: ${colors.white};
  animation: 1s ${rotateRight} ease-out forwards;
`

export function HamButton({ setModelOpen, modelOpen }) {
  const SHamContainer = styled.div`
    position: relative;
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: ${modelOpen ? 'center' : 'space-between'};
    display: none;
    cursor: pointer;

    @media (max-width: 900px) {
      display: flex;
    }
  `

  const lines = modelOpen ? (
    <>
      <STopHam />
      <SMiddleHam />
      <SBottomHam />
    </>
  ) : (
    <>
      <SHam />
      <SHam />
      <SHam />
    </>
  )

  return (
    <SHamContainer onClick={() => setModelOpen(!modelOpen)}>
      {lines}
    </SHamContainer>
  )
}

export default Button
