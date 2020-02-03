import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../../ui/styles/theme'

const MOBILE_HEADER_HEIGHT = 70
const HEADER_HEIGHT = 112

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${MOBILE_HEADER_HEIGHT}px;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: white;
  @media (min-width: ${theme.breakpoints.values.sm}px) {
    padding-top: ${HEADER_HEIGHT}px;
  }
`

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${MOBILE_HEADER_HEIGHT}px;
  z-index: ${theme.zIndex.appBar};
  @media (min-width: ${theme.breakpoints.values.sm}px) {
    height: ${HEADER_HEIGHT}px;
  }
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
`

const Footer = styled.footer`
  margin-top: auto;
`

const Page = ({header, children, footer, ...other}) => {
  return (
    <Wrapper {...other}>
      <Header>{header}</Header>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

Page.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
}

export default Page
