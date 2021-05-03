import styled from 'styled-components'

export const ServerListWrapper = styled.div``

export const ServerItemWrapper = styled.div<{ header?: boolean }>`
  width: 100%;
  background-color: ${({ theme, header }) =>
    header ? theme.colors.backgroundGray : theme.colors.white};
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`
