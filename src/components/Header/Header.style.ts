import styled, { css } from 'styled-components'

export const headerHeight = '7rem'

const fixedHeaderStyle = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: ${headerHeight};
  left: 0;
`

export const HeaderWrapper = styled.header<{ fixed: boolean }>`
  height: ${headerHeight};
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: static;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ fixed }) => fixed && fixedHeaderStyle};
`
