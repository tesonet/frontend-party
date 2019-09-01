import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  CssBaseline,
  AppBar,
  makeStyles,
  Toolbar,
  Button
} from "@material-ui/core";
import { logoutAction } from "../actions/auth";
import MaterialTable from "material-table";
import { getServerListAction } from "../actions/servers";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid #e6e6e6`,
    height: 110,
    justifyContent: "center"
  },
  logout: {
    fontWeight: 300,
    textTransform: "none",
    color: "#2f3254",
    "&:hover": {
      backgroundColor: "#99cc33"
    }
  },
  toolbar: {
    flexWrap: "wrap"
  },
  grow: {
    flexGrow: 1
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  }
}));

const options = {
  sorting: true,
  toolbar: false,
  paging: false,
  headerStyle: {
    paddingBottom: 10,
    backgroundColor: "#f5f5f5",
    color: "#999",
    fontWeight: 300,
    letterSpacing: 1.4,
    height: 60
  },
  rowStyle: {
    height: 60
  }
};

const columns = [
  {
    title: "SERVER",
    field: "name",
    cellStyle: {
      color: "#666",
      fontWeight: 300,
      letterSpacing: 0.4,
      borderBottom: `1px solid #e6e6e6`
    }
  },
  {
    title: "DISTANCE",
    field: "distance",
    customSort: (a, b) => a.distanceOriginal - b.distanceOriginal,
    cellStyle: {
      textAlign: "right",
      color: "#666",
      fontWeight: 300,
      letterSpacing: 0.4,
      borderBottom: `1px solid #e6e6e6`
    },
    headerStyle: {
      textAlign: "right"
    },
    defaultSort: "asc"
  }
];

function Home({ logoutAction, getServerListAction, serverList }) {
  useEffect(() => {
    getServerListAction();
  }, [getServerListAction]);

  const [logout, setLogout] = useState(false);
  const classes = useStyles();

  const onClickLogout = () => {
    logoutAction();
    setLogout(true);
  };

  return logout ? (
    <Redirect to="/" />
  ) : (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <img
            src={require("../resources/testio-black.svg")}
            alt="Testio logo"
            className={classes.logo}
          />
          <div className={classes.grow} />
          <Button onClick={onClickLogout} className={classes.logout}>
            <img
              alt="Logout icon"
              className={classes.leftIcon}
              src={require("../resources/logout.svg")}
            />
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <MaterialTable
        isLoading={serverList.data.length === 0}
        columns={columns}
        options={options}
        data={serverList.data.map(row => ({
          name: row.name,
          distance: row.distance + " km",
          distanceOriginal: row.distance
        }))}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  serverList: state.serverListReducer.serverList
});

const mapDispatchToProps = {
  logoutAction,
  getServerListAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

Home.propTypes = {
  logoutAction: PropTypes.function,
  getServerListAction: PropTypes.function,
  serverList: PropTypes.object
};
