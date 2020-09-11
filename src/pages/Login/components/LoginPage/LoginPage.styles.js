import styled from 'styled-components';
import backgroundImage from '@/assets/images/background-image.png'

export const StyledLoginWrapper = styled.div`
  background-image: url(${backgroundImage});
  width: 100%;
  height: 100%;
  position: fixed; 
  top: 0; 
  left: 0; 
  background-size: cover;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`

export const StyledLoginContainer = styled.div`
  display: flex;
  align-items: center;
  width: 360px;
  flex-direction: column;
`

export const StyledLogo = styled.img`
  width: 80%;
  max-width: 240px;
  margin-bottom: 50px;
`