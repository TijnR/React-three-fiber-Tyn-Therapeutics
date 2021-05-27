import React from 'react'
import styled from 'styled-components'

function Section({ children, bgcolor, align }) {
  const SContainer = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: ${bgcolor || '#ffffff'};
    padding: 150px 40px;
    display: flex;
    flex-direction: column;

    @media (max-width: 900px) {
      padding: 120px 20px;
    }
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
