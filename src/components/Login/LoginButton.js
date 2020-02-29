import styled from 'styled-components';

export default styled.button`
  width: 360px;
  height: 58px;
  border: none;
  border-radius: 5px;
  background: #9fd533;
  color: white;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.4px;
  &&:focus {
    outline: none;
  }
  &&:hover {
    background: #86b300;
  }
  &&:active {
    position: relative;
    top: 2px;
  }
`;
