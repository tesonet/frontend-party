import BaseWrapper from './BaseWrapper';

const Navigation = BaseWrapper.extend`
  box-shadow: 0 2px 2px -2px ${(props) => props.theme.borderColor};
  min-height: 56px;
  @media only screen and (min-width: 480px) {
    min-height: 112px;  
  }
`;

export default Navigation;
