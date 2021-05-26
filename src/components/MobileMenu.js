import React from 'react'
import styled, { keyframes } from 'styled-components'
import { colors } from '../theme/colors'

const SModel = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: none;
  flex-direction: column;
  padding: 100px 40px;
  z-index: 30;
  background: ${colors.primary};
`

const showup = keyframes`
  0% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(0)
  }
`

const SModelShown = styled(SModel)`
  display: flex;
  animation: 1s ${showup} ease-in forwards;
`

function MobileMenu({ modelOpen, children }) {
  return modelOpen ? (
    <SModelShown>{children}</SModelShown>
  ) : (
    <SModel>{children}</SModel>
  )
}

export default MobileMenu
