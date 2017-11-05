import BaseWrapper from './BaseWrapper';

const ListHead = BaseWrapper.extend`
  background-color: ${(props) => props.theme.secondaryBgColor};
  color: ${(props) => props.theme.listHeadTextColor};
  text-transform: uppercase;
  min-height: 24px;
  box-shadow: 0 1px 2px 0px ${(props) => props.theme.borderColor};
  @media only screen and (min-width: 480px) {
    min-height: 58px;
  }
`;

export default ListHead;
