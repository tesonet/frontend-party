import styled from 'styled-components';

export default styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  color: #666;
  font-size: 18px;
  letter-spacing: 0.4px;
  font-weight: 300;
  border-bottom: 1px solid #e6e6e6;
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;
