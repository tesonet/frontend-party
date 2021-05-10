import { Loading } from 'components/core/Loading/Loading'
import styled from 'styled-components'
import React from 'react'
import { headerHeight } from 'components/Header/Header.style'

interface BaseContainerProps {
  content: JSX.Element
  header?: JSX.Element
  loading?: boolean
}

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`

const Main = styled.main<{ header?: boolean }>`
  position: relative;
  top: ${({ header }) => (header ? headerHeight : 0)};
`

const BaseContainer: React.FC<BaseContainerProps> = ({ content, header, loading = false }) => {
  return (
    <Container>
      {header && header}
      <Loading visible={loading} />
      <Main header={!!header}>{content}</Main>
    </Container>
  )
}

export default BaseContainer
