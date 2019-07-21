import React from "react";
import renderer from "react-test-renderer";

//Component.
import FormErrors from "../components/FormErrors/FormErrors";

it("renders correctly string error", () => {
  const tree = renderer
    .create(<FormErrors>"This is string error"</FormErrors>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly array of strings", () => {
  const errorMock = {
    1: "Username is required",
    2: "Password is required"
  };

  const tree = renderer.create(<FormErrors>{errorMock}</FormErrors>).toJSON();
  expect(tree).toMatchSnapshot();
});
