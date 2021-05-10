import styled from 'styled-components'

export const SpinnerContent = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;

  &::after {
    content: ' ';
    display: block;
    width: 40px;
    height: 40px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.colors.limeade};
    border-color: ${({ theme }) => theme.colors.limeade} transparent
      ${({ theme }) => theme.colors.limeade} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
