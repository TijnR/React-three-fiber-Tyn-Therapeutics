import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import { ReactComponent as ReactLogo } from '../images/right-arrow.svg'

const Sbutton = styled.button`
  padding: 15px 40px;
  background-color: ${colors.primary};
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(-45deg, transparent 15px, ${colors.primary} 0);
`

const SbuttonLabel = styled.span`
  font-family: 'Street Bold';
  font-size: 16px;
  color: ${colors.white};
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
    <div style={{ display: 'inline-block' }}>
      <Sbutton>
        <SbuttonLabel>LEARN MORE</SbuttonLabel>
        <SiconContainer>
          <ReactLogo />
        </SiconContainer>
      </Sbutton>
    </div>
  )
}

export default Button
