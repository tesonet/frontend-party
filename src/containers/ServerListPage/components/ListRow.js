import BaseWrapper from './BaseWrapper';

const ListRow = BaseWrapper.extend`
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  height: 44px;
  color: ${(props) => props.theme.listTextColor};
  @media only screen and (min-width: 480px) {
    height: 58px;
  }
`;

export default ListRow;
