import React from 'react'
import styled from 'styled-components'

const Footer = styled.div`
  text-align: center;
  color: grey;
  font-size: 0.6rem;
  padding: 10px;
`

export default () => {
  return <Footer>&copy; {new Date().getFullYear()} Testio</Footer>
}
