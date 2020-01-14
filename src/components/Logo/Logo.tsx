import React from "react";
import logoLight from "../../assets/logo-login.png";
import logoDark from "../../assets/logo-servers.png";
import styled from "styled-components";

interface LogoProps {
  variation: "light" | "dark";
  align: "center" | "left" | "right";
}

interface LogoContainerProps {
  align: "left" | "center" | "right";
}

const LogoContainer = styled.div<LogoContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${props => {
    switch (props.align) {
      case "center":
        return "space-around";
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
    }
  }};
`;

const getLogo = (variation: string): string => {
  switch (variation) {
    case "light":
      return logoLight;
    case "dark":
      return logoDark;
    default:
      break;
  }
};

const Logo: React.FC<LogoProps> = ({ variation, align }) => (
  <LogoContainer align={align}>
    <img src={getLogo(variation)} />
  </LogoContainer>
);

export default Logo;
