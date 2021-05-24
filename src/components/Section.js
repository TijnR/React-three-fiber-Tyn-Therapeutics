import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/theme'

function Section({ children, bgcolor, align }) {
  const SContainer = styled.section`
    height: 100vh;
    width: 100%;
    background-color: ${bgcolor || '#ffffff'};
    padding: 200px 20px;
    display: flex;
    flex-direction: column;
  `

  const SInner = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: ${align ? 'flex-end' : 'flex-start'};
  `

  return (
    <SContainer>
      <SInner>{children}</SInner>
    </SContainer>
  )
}

export default Section
