import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  padding: 40px 15px;
  justify-content: space-between;
  align-items: center;
`;

export const ListRow = styled.div`
  padding: 15px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
`;

export const ListWrapper = styled.div`
  padding-bottom: 60px;
`;

export const ListHeader = styled(ListRow)`
  background: #f5f5f5;
  border-top: 1px solid #e6e6e6;
  text-transform: uppercase;
  font-size: 0.95rem;
  color: #aaa;
`;

export const ErrorRow = styled(ListRow)`
  border-top: 1px solid #e6e6e6;
  text-transform: uppercase;
  color: #ff4f17;
  font-weight: bold;
  background: #ffcfcf;
`;

export const LogOutIconWrapper = styled.div`
  display: inline-block;
  margin-right: 7px;
  transform: rotate(180deg);
`;

export const LogOutButton = styled.button`
  background: #fff;
  border: none;
  :hover {
    color: #99cc33;
  }
`;

export const RetryButton = styled.button`
  margin-left: 20px;
`;
