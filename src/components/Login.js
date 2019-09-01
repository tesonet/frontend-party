import React, { useEffect, useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  makeStyles,
  Container,
  InputAdornment,
  Snackbar,
  IconButton
} from "@material-ui/core";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { submitLoginForm } from "../actions/auth";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      WebkitOverflowScrolling: "touch",
      overflow: "hidden",
      backgroundColor: "#0B0F27",
      backgroundImage: "url('../resources/background.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      position: "fixed",
      left: 0,
      right: 0,
      height: "100%"
    },
    html: {
      height: "100%"
    },
    "#componentWithId": {
      height: "100%"
    }
  },
  paper: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  login: {
    margin: theme.spacing(2, 0, 8),
    fontSize: 16,
    fontWeight: 700,
    height: 56,
    textTransform: "none",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: "#86b300",
      color: "#fff"
    }
  },
  logo: {
    margin: theme.spacing(0, 0, 6)
  },
  outerContainer: {
    height: "100vh"
  },
  inputIcon: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2)
  },
  error: {
    backgroundColor: theme.palette.primary.error
  }
}));

function SignIn({ submitLoginForm, authenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const login = async () => {
    setPassword("");
    const res = await submitLoginForm(username, password);
    if (res.alertMessage) {
      setError(res.alertMessage);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (authenticated) {
      setRedirect(true);
    }
  });

  const classes = useStyles();

  return redirect ? (
    <Redirect to="dashboard" />
  ) : (
    <Container
      component="main"
      maxWidth="xs"
      className={classes.outerContainer}
    >
      <CssBaseline />
      <Snackbar
        ContentProps={{
          classes: {
            root: classes.error
          }
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={<span id="message-id">{error}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
      <div className={classes.paper}>
        <img
          alt="Testio Logo"
          className={classes.logo}
          src={require("../resources/testio.svg")}
        />
        <form className={classes.form} noValidate>
          <TextField
            error={error} //Lets take a moment to appreciate that empty strings are falsy in JS 🙃
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="Username"
            name="email"
            onChange={e => setUsername(e.target.value)}
            onClick={() => setError("")}
            value={username}
            onKeyPress={e => {
              if (e.key === "Enter") {
                login();
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" className={classes.inputIcon}>
                  <img alt="User icon" src={require("../resources/user.svg")} />
                </InputAdornment>
              )
            }}
          />
          <TextField
            error={error}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            placeholder="Password"
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            onClick={() => setError("")}
            value={password}
            onKeyPress={e => {
              if (e.key === "Enter") {
                login();
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" className={classes.inputIcon}>
                  <img
                    alt="Password icon"
                    src={require("../resources/password.svg")}
                  />
                </InputAdornment>
              )
            }}
          />
          <Button
            fullWidth
            margin="normal"
            variant="contained"
            className={classes.login}
            onClick={() => login()}
          >
            Log In
          </Button>
        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  authenticated: state.authReducer.authenticated
});

const mapDispatchToProps = {
  submitLoginForm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

SignIn.propTypes = {
  submitLoginForm: PropTypes.function,
  authenticated: PropTypes.bool
};
