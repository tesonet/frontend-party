import styled from 'styled-components';

const HeaderStyles = styled.header`
  /* padding: 42px 15px; */
  padding: 30px;
  padding: 0 15px 0 15px;
  width: 100%;
  flex-shrink: 0;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  .header-button {
    border: 1px solid #0015ff;
    background: #ffffff;
    color: #2f3254;
    padding: 7px;
    display: flex;
    align-items: center;
    transition: all 0.2s;
    text-decoration: none;
    font-family: 'Roboto';

    &:hover {
      background: #99cc33;
    }
  }
`;
export default HeaderStyles;