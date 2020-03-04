import styled from 'styled-components';
import serversLogo from '../../assets/png/serversLogo.png';

export default styled.img.attrs(() => ({
  src: `${serversLogo}`,
}))`
  width: 115px;
  height: 30px;
  margin-left: 30px;
`;
