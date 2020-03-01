import styled from 'styled-components';

export default styled.input`
  width: 305px;
  height: 58px;
  border: none;
  border-radius: 5px;
  color: #999;
  padding-left: 55px;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.4px;
  &&:focus {
    outline: none;
  }
  &&::placeholder {
    font-size: 16px;
    color: #b3b3b3;
    letter-spacing: 0.4px;
    font-weight: 300;
  }
  @media (max-width: 400px) {
    width: calc(90% - 55px);
    margin: 0 auto;
  }
`;
