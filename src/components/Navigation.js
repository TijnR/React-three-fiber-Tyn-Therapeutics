import React, { useState } from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'
import NavItem, { NavItemAlt } from './NavItem'
import { HamButton } from './Button'
import MobileMenu from './MobileMenu'

const SHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 25px 40px;
  width: 100%;
  z-index: 20;
  backdrop-filter: blur(2px);

  @media (max-width: 900px) {
    padding: 25px 20px;
  }
`

const SInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const SNavItems = styled.div`
  display: flex;
  padding-left: 100px;
  padding-top: 7px;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;

  @media (max-width: 900px) {
    display: none;
  }
`

function Navigation() {
  const [modelOpen, setModelOpen] = useState(false)

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

        <HamButton modelOpen={modelOpen} setModelOpen={setModelOpen} />
      </SInner>
      <MobileMenu modelOpen={modelOpen}>
        <NavItemAlt active>Home</NavItemAlt>
        <NavItemAlt>Science</NavItemAlt>
        <NavItemAlt>Pipeline</NavItemAlt>
        <NavItemAlt>About Us</NavItemAlt>
        <NavItemAlt>Contact</NavItemAlt>
      </MobileMenu>
    </SHeader>
  )
}

export default Navigation
