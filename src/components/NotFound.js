import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      WebkitOverflowScrolling: "touch",
      overflow: "hidden",
      backgroundImage: "url('../resources/404.jpg')",
      backgroundRepeat: "no-repeat",
      zoom: 1.5,
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
    alignItems: "center"
  },
  notFound: {
    marginTop: theme.spacing(12),
    color: "#fff",
    fontSize: 96,
    letterSpacing: 10,
    fontWeight: 500
  },
  notFoundSmall: {
    color: "#fff",
    fontSize: 12,
    letterSpacing: 1,
    textAlign: "center"
  }
}));

export default function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Typography className={classes.notFound}>404</Typography>
      <Typography className={classes.notFoundSmall}>
       The page you requested could not be found 🤷‍♂️
      </Typography>
    </div>
  );
}
