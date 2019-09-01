import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  overrides: {
    MuiIcon: {
      root: {
        fontSize: "1.2rem"
      }
    },
    MuiOutlinedInput: {
      input: {
        color: "#999",
        fontWeight: "300",
        "&::placeholder": {
          color: "#b3b3b3",
        }
      },
      root: {
        background: "#fff",
        borderRadius: 4
      },
      notchedOutline: {
        borderColor: "#fff"
      }
    },
    MuiButton: {
      text: {
        color: "#fff"
      }
    }
  },
  palette: {
    primary: { main: "#9fd533", error: "#cc0000" },
    text: { primary: "#666666" }
  }
});
