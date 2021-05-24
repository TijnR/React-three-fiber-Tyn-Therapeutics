import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import Button from './Button'

const SBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`

const SsubTitle = styled.h3`
  font-size: 18px;
  font-weight: 530;
  color: ${colors.grey};
  font-weight: normal;
  font-family: 'Street Bold';
  text-transform: uppercase;
  padding-bottom: 10px;
`

const Stitle = styled.h1`
  color: ${colors.black};
  font-size: 60px;
  font-weight: medium;
  font-family: 'Street Bold';
  text-transform: capitalize;
  letter-spacing: -1px;
  line-height: 1.1em;
`

const Sparagraph = styled.p`
  color: ${colors.grey};
  line-height: 1.5em;
  padding: 25px 0;
`

function ContentBlock({ subTitle, title, children }) {
  return (
    <SBlock>
      <SsubTitle>{subTitle}</SsubTitle>
      <Stitle>{title}</Stitle>
      <Sparagraph>{children}</Sparagraph>
      <Button />
    </SBlock>
  )
}

export default ContentBlock
