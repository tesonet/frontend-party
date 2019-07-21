import React from "react";
import renderer from "react-test-renderer";

//Component.
import ImageProxy from "../components/ImageProxy/ImageProxy";

//Image.
import testioImgPath from "../assets/icons/logo.svg";

it("renders correctly", () => {
  const tree = renderer
    .create(<ImageProxy src={testioImgPath} alt="testio" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
