import React from 'react'
import styled from 'styled-components'

const ScanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

function CanvasContainer({ children }) {
  return <ScanvasContainer>{children}</ScanvasContainer>
}

export default CanvasContainer
