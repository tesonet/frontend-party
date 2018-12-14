import styled from "styled-components";
import BackgroundImage from "../assets/images/background.png";

const Logo = styled.img`
  height: auto;
  max-height: 60px;
  background-size: contain;
  background-position: center;
`;

const CenterLogo = styled.div`
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${BackgroundImage});
  background-image: linear-gradient(
      rgba(11, 15, 39, 0.8),
      rgba(11, 15, 39, 0.8)
    ),
    url(${BackgroundImage});
`;

export { Logo, CenterLogo, BackgroundContainer };
