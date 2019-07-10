import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 360px;
  font-family: "Roboto";

  .form-error-message {
    color: #fff;
    border: 3px solid #d50000;
    padding: 8px;
    border-radius: 6px;
  }

  fieldset {
    border: none;
    &:disabled {
      opacity: 0.5;
    }
  }

  @media (max-width: 600px) {
    min-width: 85%;
  }

  @media only screen and (min-width: 600px, max-width: 1200px) {
    min-width: 40%;
  }

  .input-container {
    width: 100%;
    margin-bottom: 15px;
    border: 0;
    position: relative;
  }

  input[type="text"],
  input[type="password"] {
    padding: 16px 15px 10px 45px;
    border-spacing: 0;
    border-radius: 5px;
    width: 100%;
    font-size: 16px;
    line-height: 30px;
    border: 0;
    box-sizing: border-box;

    &::placeholder {
      color: #c7c7c7;
      font-family: "Roboto";
      font-weight: 300;
    }

    &:focus {
      color: #999;
    }
  }

  .form-button {
    display: inline-block;
    height: 56px;
    width: 100%;
    border: 0;
    border-radius: 5px;
    color: #fff;
    background: #9fd533;
    font-size: 16px;
    font-weight: 700;
    transition: all 0.2s;
    cursor: pointer;
    padding-top: 7px;
    font-family: inherit;

    &:hover {
      background-color: #86b300;
    }

    &:focus {
      outline: none;
    }
  }
`;

export default Form;
