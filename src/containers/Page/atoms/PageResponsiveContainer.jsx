import styled from 'styled-components';
import { flexbox, color, background } from 'styled-system';

export default styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 300px;

  ${color}
  ${background}
  ${flexbox}

  @media only screen and (min-device-width: 576px) {
    width: 540px;
  }

  @media only screen and (min-device-width: 768px) {
    width: 720px;
  }

  @media only screen and (min-device-width: 992px) {
    width: 960px;
  }

  @media only screen and (min-device-width: 1200px) {
    width: 1140px;
  }
`;
