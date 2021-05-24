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
    <ImageContainer>
      <ReactLogo />
    </ImageContainer>
  )
}
