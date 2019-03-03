import logo from "./logo-dark.png";

export const serverListStyles = {
  pageHeader: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "70px",
    padding: "inherit"
  },
  listContainer: {
    flex: 1
  },
  tableHeader: {
    backgroundColor: "#f5f5f5"
  },
  serverColumn: {
    width: "100%"
  },
  tableBlockComponent: {
    display: "block"
  },
  logoutButton: {
    backgroundColor: "#fff",
    border: "none",
    whiteSpace: "nowrap",
    height: "38px",
    ":hover": {
      backgroundColor: "#99cc33"
    }
  },
  logoutIcon: {
    marginRight: "10px"
  },
  darkLogo: {
    background: `url(${logo}) no-repeat`,
    backgroundSize: "contain",
    width: "100%",
    height: "30px"
  }
};
