import styled, { css } from 'styled-components'

const headerHeight = '112px'

const fixedHeaderStyle = css`
  position: fixed;
  top: ${headerHeight};
  right: 0;
  left: 0;
  height: 50px;
`

export const ServerListWrapper = styled.div``

export const ServerItemWrapper = styled.div<{ header?: boolean }>`
  width: 100%;
  background-color: ${({ theme, header }) =>
    header ? theme.colors.backgroundGray : theme.colors.white};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  color: ${({ theme, header }) => (header ? theme.colors.dustyGray : theme.colors.textGray)};
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  text-transform: ${({ header }) => (header ? 'uppercase' : 'none')};
  font-weight: 300;
  position: static;

  ${({ header }) => header && fixedHeaderStyle};
`
