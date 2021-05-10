import styled, { css } from 'styled-components'

const bigButtonStyle = css`
  width: 10rem;
  font-weight: 400;

  &:hover {
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.atlantis};
  }
`

export const ButtonWrapper = styled.div<{ big?: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  justify-content: space-evenly;
  width: 5.625rem;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-weight: 300;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.atlantis};
  }

  ${({ big }) => big && bigButtonStyle};
`
