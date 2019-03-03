import bg from "../../images/login-bg.png";
import logo from "../../images/logo-white.png";

export const loginStyles = {
  wrapper: {
    background: `url(${bg}) no-repeat center center fixed`,
    backgroundSize: "cover"
  },
  formContainer: {
    margin: "auto",
    maxWidth: "500px",
    width: "100%"
  },
  whiteLogo: {
    background: `url(${logo}) no-repeat center`,
    backgroundSize: "contain",
    width: "100%",
    height: "60px"
  },
  formControl: {
    width: "100%",
    height: "56px",
    border: 0,
    ":focus": {
      boxShadow: "none"
    }
  },
  inputGroup: {
    marginBottom: "20px"
  },
  inputIcon: {
    backgroundColor: "#fff",
    paddingLeft: "20px",
    paddingRight: "0",
    border: 0
  },
  input: {
    ":focus": {
      color: "#999"
    }
  },
  button: {
    backgroundColor: "#9fd533",
    fontWeight: "600",
    ":hover": {
      backgroundColor: "#86b300"
    }
  },
  errorContainer: {
    height: "70px",
    padding: "10px 0 5px"
  }
};
