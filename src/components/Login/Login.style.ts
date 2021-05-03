import styled from 'styled-components'

export const LoginWrapper = styled.div<{ backgroundImage: string }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  position: relative;
`

export const Overlay = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.overlayColor};
`
export const Content = styled.div`
  position: relative;
`
