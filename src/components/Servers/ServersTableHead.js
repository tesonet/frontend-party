import styled from 'styled-components';

export default styled.div`
  background: #f5f5f5;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  color: #999;
  font-size: 16px;
  letter-spacing: 1.4px;
  font-weight: 300;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  position: sticky;
  top: 0px;
  @media (min-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;
