import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'

function NavItem({ active, children }) {
  const SNavItem = styled.a`
    width: 125px;
    display: flex;
    flex-direction: column;
    transition: 300ms ease-out;
    text-decoration: none;

    :before {
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${active ? colors.primary : colors.grey};
    }

    :hover {
      span {
        color: ${colors.primary};
      }
      :before {
        background-color: ${colors.primary};
      }
    }
  `

  const SSpan = styled.span`
    padding-top: 10px;
    font-size: 18px;
    font-weight: 500;
    color: ${active ? colors.primary : colors.grey};
    transition: 300ms ease-out;
  `

  return (
    <SNavItem href={'https://nl.linkedin.com/in/tijn-roozen'}>
      <SSpan>{children}</SSpan>
    </SNavItem>
  )
}

export function NavItemAlt({ active, children }) {
  const SNavItem = styled.a`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    transition: 300ms ease-out;
    text-decoration: none;

    :before {
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${active ? colors.white : colors.grey};
    }

    :hover {
      span {
        color: ${colors.white};
      }
      :before {
        background-color: ${colors.white};
      }
    }
  `

  const SSpan = styled.span`
    padding-top: 10px;
    font-size: 24px;
    font-weight: 500;
    transition: 300ms ease-out;
    color: ${active ? colors.white : colors.grey};
  `

  return (
    <SNavItem href={'https://nl.linkedin.com/in/tijn-roozen'}>
      <SSpan>{children}</SSpan>
    </SNavItem>
  )
}

export default NavItem
