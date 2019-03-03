import styled from 'styled-components';
import bgImg from '../../assets/images/bg.jpg';

export const ErrorTextWrapper = styled.div`
  min-height: 35px;
  margin-top: 20px;
`;

export const ErrorText = styled.div`
  padding: 5px 9px;
  color: #e91e63;
  background: #fff;
  border: none;
  border-radius: 3px;
`;

export const LoginWrapper = styled.div`
  background: #0b0f27;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginOverlay = styled.div`
  opacity: 0.2;
  background: url(${bgImg}) #18315d;
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const LogoImg = styled.img`
  margin: 0 auto 70px;
  display: block;
`;

const LoginButtonActiveBorderColor = '#84b325';
const LoginButtonBgColor = '#86b300';
const LoginButtonBoxShadowColor = '159, 213, 51, 0.23';
export const LoginButton = styled.input`
  background: #9fd533;
  font-size: 1em;
  font-weight: bold;
  padding: 15px;
  border-color: ${LoginButtonActiveBorderColor};
  :hover {
    background: ${LoginButtonBgColor};
    border-color: ${LoginButtonActiveBorderColor};
  }
  :not(:disabled):not(.disabled):active {
    background: ${LoginButtonBgColor};
    border-color: ${LoginButtonActiveBorderColor};
    box-shadow: 0 0 0 0.2rem rgba(${LoginButtonBoxShadowColor});
  }
  :not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 0.2rem rgba(${LoginButtonBoxShadowColor});
  }
`;

export const LoginInputIcon = styled.div`
  width: 50px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
  flex-direction: column;
`;

export const LoginInputText = styled.input`
  border: none;
  padding: 14px 14px 14px 50px;
  height: auto;
  ::placeholder {
    color: #ccc;
  }
  :focus::placeholder {
    color: #999;
  }
`;

export const LoginInputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

// fix ie min-height and align-items bug
export const Ie11Fix = styled.div`
  display: flex;
  flex-direction: column;
`;
