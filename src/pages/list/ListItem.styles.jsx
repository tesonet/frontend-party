import styled, { css } from "styled-components";

const Container = styled.div`
  padding: 0 15px;
  display: flex;
  border-top: 1px solid rgb(230, 230, 230);
  justify-content: space-between;
  height: 58px;

  ${({ type }) =>
    type == "header" &&
    css`
      color: #999;
      background: rgb(245, 245, 245);
      text-transform: uppercase;
    `}
`;

const Title = styled.p`
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 2.143;
  padding: 0;
  margin: 0;
`;

export { Container, Title };
