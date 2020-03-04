import styled from 'styled-components';

export default styled.button`
  border: none;
  border-radius: 5px;
  background: #fff;
  color: #2f3254;
  font-size: 16px;
  letter-spacing: 0.35px;
  font-weight: 300;
  width: 100px;
  height: 40px;
  padding: 0 10px;
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &&:focus {
    outline: none;
  }
  &&:hover {
    background: #99cc33;
  }
  &&:active {
    position: relative;
    top: 2px;
    left: 2px;
  }
`;
