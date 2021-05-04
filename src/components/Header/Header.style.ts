import styled, { css } from 'styled-components'

const headerHeight = '112px'

const fixedHeaderStyle = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: ${headerHeight};
  left: 0;
  margin-bottom: ${headerHeight};
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
