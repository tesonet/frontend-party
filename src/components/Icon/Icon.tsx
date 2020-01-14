import React from "react";
import Icons from "./Icons";

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case "user":
      return <Icons.User />;
    case "padlock":
      return <Icons.Padlock />;
    case "exit":
      return <Icons.Exit />;
    default:
      break;
  }
};

export default Icon;
