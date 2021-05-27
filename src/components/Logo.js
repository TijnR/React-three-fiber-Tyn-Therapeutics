import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ReactLogo } from '../images/tyns-therapeutics.svg'

const ImageContainer = styled.div`
  svg {
    width: 200px;
  }
`

export const Logo = () => {
  return (
    <a
      style={{ display: 'inline-block', textDecoration: 'none' }}
      href={'https://nl.linkedin.com/in/tijn-roozen'}
    >
      <ImageContainer>
        <ReactLogo />
      </ImageContainer>
    </a>
  )
}
