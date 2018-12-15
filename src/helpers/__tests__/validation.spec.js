import validate from "../validation";
import { USERNAME_ERROR_MSG, PASSWORD_ERROR_MSG } from "../constants";

describe("Validation helper functionality", () => {
  it("should return a username error msg if username is missing", () => {
    const falseInput = {
      password: "fake",
    };
    expect(validate(falseInput)).toEqual({ username: USERNAME_ERROR_MSG });
  });

  it("should return a password error msg if password is missing", () => {
    const falseInput = {
      username: "fake",
    };
    expect(validate(falseInput)).toEqual({ password: PASSWORD_ERROR_MSG });
  });

  it("should return a password and name error msg if input if false", () => {
    expect(validate({})).toEqual({
      username: USERNAME_ERROR_MSG,
      password: PASSWORD_ERROR_MSG,
    });
  });
});
