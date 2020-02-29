import styled from 'styled-components';
import loginLogo from '../../assets/png/loginLogo.png';

export default styled.img.attrs(() => ({
  src: `${loginLogo}`,
}))`
  width: 246px;
  margin-bottom: 70px;
`;
