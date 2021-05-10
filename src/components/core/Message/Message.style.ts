import styled, { css } from 'styled-components'

const transition = css`
  &,
  &.visible-enter {
    transform: translate(-50%, -300%);
  }

  &.visible-enter-active,
  &.visible-enter-done {
    transform: translate(-50%, 0);
    transition: transform ease-out 100ms;
  }
`
export const MessageWrapper = styled.div`
  position: fixed;
  top: 2rem;
  left: 50%;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  font-size: 0.8rem;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  ${transition}
`
