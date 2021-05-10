import styled, { css } from 'styled-components'
import { headerHeight } from 'components/Header/Header.style'

const listTableHeight = '3.25rem'

const fixedHeaderStyle = css`
  position: fixed;
  top: ${headerHeight};
  right: 0;
  left: 0;
  height: ${listTableHeight};
`

const activeHeaderItemStyle = css`
  color: ${({ theme }) => theme.colors.atlantis};
  font-weight: 400;
`

export const ServerListWrapper = styled.div``

export const ServerItemWrapper = styled.div<{ header?: boolean }>`
  width: 100%;
  background-color: ${({ theme, header }) =>
    header ? theme.colors.backgroundGray : theme.colors.white};
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  padding: 1rem;
  color: ${({ theme, header }) => (header ? theme.colors.dustyGray : theme.colors.textGray)};
  border-top: 1px solid ${({ theme, header }) => (header ? theme.colors.borderColor : 0)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  text-transform: ${({ header }) => (header ? 'uppercase' : 'none')};
  font-weight: 300;
  position: static;

  ${({ header }) => header && fixedHeaderStyle};
`
export const Items = styled.div`
  position: relative;
  top: ${listTableHeight};
  height: calc(100vh - ${headerHeight} - 3.625rem);
  overflow-y: auto;
`
export const HeaderItem = styled.div<{ active?: boolean }>`
  cursor: pointer;
  display: flex;

  ${({ active }) => active && activeHeaderItemStyle};
`
