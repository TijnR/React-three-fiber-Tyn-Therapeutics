import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'

function NavItem({ active, children }) {
  const SNavItem = styled.a`
    width: 125px;
    display: flex;
    flex-direction: column;

    :before {
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${active ? colors.primary : colors.grey};
    }
  `

  const SSpan = styled.span`
    padding-top: 10px;
    font-size: 18px;
    font-weight: 500;
    color: ${active ? colors.primary : colors.grey};
  `

  return (
    <SNavItem>
      <SSpan>{children}</SSpan>
    </SNavItem>
  )
}

export default NavItem
