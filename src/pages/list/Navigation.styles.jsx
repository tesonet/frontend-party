import styled from "styled-components";

const Container = styled.div`
  padding: 0 15px;
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 29px;
`;

const Icon = styled.img`
  padding-right: 5px;
`;

const Button = styled.button`
  background: #fff;
  padding: 7px;
  border: 1px solid #fff;

  :hover {
    border: 1px solid #99cc33;
  }
`;

export { Container, Logo, Icon, Button };
