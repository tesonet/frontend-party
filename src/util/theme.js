export default {
  palette: {
    primary: {
      main: '#9FD533'
    },
    secondary: {
      main: '#999'
    }
  },

  typography: {
    useNextVariants: true
  },
  spreadThis: {
    invisibleSeparator: {
      border: 'none',
      margin: 4
    },
    serversGridItemHeader: {
      backgroundColor: '#F5F5F5',
      padding: '0 20px',
      borderTop: '1px solid #E6E6E6',
      borderBottom: '1px solid #E6E6E6'
    },
    serversGridItem: { padding: '0 20px', borderBottom: '1px solid #E6E6E6' },
    country: {
      textTransform: 'uppercase',
      fontSize: 16,
      fontWeight: 300
    },

    distance: {
      textAlign: 'right',
      textTransform: 'uppercase',
      fontSize: 16,
      fontWeight: 300
    },
    countryList: {
      fontSize: 16,
      fontWeight: 300
    },
    distanceList: {
      textAlign: 'right',
      fontSize: 16,
      fontWeight: 300
    },
    listItemContainer: {
      minHeight: 60
    },
    form: {
      textAlign: 'center',
      padding: '0 20px'
    },
    image: {
      margin: '20px auto 50px auto'
    },
    pageTitle: {
      margin: '10px auto 10px auto'
    },
    textField: {
      margin: '10px auto 10px auto',
      background: 'white',
      borderRadius: 5
    },
    button: {
      marginTop: 10,
      position: 'relative',
      backgroundColor: '#9FD533',
      fontWeight: 'bold',
      textTransform: 'capitalize',
      color: 'white',
      padding: '15px 14px',
      '&:hover': {
        backgroundColor: '#86b300'
      }
    },
    logoutBtn: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: '#99cc33'
      }
    },
    logoutButton: {
      textAlign: 'right'
    },
    headerTop: {
      padding: '0 20px',
      margin: '25px 0'
    },
    customError: {
      color: '#ff5a5a',
      fontSize: '0.8rem',
      marginTop: 10
    },
    progress: {
      position: 'absolute'
    }
  }
};
