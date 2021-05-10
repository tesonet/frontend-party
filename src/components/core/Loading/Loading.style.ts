import styled, { css } from 'styled-components'

const transition = css`
  &,
  &.visible-enter {
    opacity: 0;
  }

  &.visible-enter-active,
  &.visible-enter-done {
    opacity: 1;
    transition: opacity 100ms;
  }
`
export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ffffff80;
  display: flex;
  align-items: center;
  justify-content: center;
  ${transition}
`
