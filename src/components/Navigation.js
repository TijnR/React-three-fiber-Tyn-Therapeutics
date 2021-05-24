import React from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'
import NavItem from './NavItem'

const SHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 25px 20px;
  width: 100%;
  backdrop-filter: blur(2px);
`

const SInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
`

const SNavItems = styled.div`
  display: flex;
  padding-left: 100px;
  padding-top: 7px;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
`

function Navigation() {
  return (
    <SHeader>
      <SInner>
        <Logo />
        <SNavItems>
          <NavItem active>Home</NavItem>
          <NavItem>Science</NavItem>
          <NavItem>Pipeline</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Contact</NavItem>
        </SNavItems>
      </SInner>
    </SHeader>
  )
}

export default Navigation
