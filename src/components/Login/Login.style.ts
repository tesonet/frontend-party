import { createUseStyles } from "react-jss";
import Background from '../../../assets/img/login-page-background.png'

export default createUseStyles({
    logoutButtonStyle: {
      width: '100%',
      border: 'none',
      padding: '18px 0',
      borderRadius: 5,
      backgroundColor: '#83D605',
      color: 'white',
      transition: 'background-color 0.2s ease-in',
      '&:hover': {
        backgroundColor: '#86b300',
        cursor: 'pointer',
      },
      '&:disabled': {
        backgroundColor: '#AFE45D',
        pointerEvents: 'none',
      },
    },
    wrapper: {
      height: '100%',
      width: '100%',
      backgroundColor: '#0b0f27',
      position: 'relative',
      zIndex: 1,
    },
    background: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: '100%',
      background: [`url(${Background})`, 'no-repeat', 'center'],
      backgroundSize: 'cover',
      opacity: 0.3,
      zIndex: -1,
    },
    formContainer: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '& .logo': {
        marginBottom: 70,
      },
    },
    form: {
      width: '40%',
      minWidth: 300,
      maxWidth: 400,
    },
    error: {
      color: 'red',
    },
    logoutWrapper: {
      color: '#fff',
      width: '40%',
      minWidth: 300,
      maxWidth: 400,
      textAlign: 'center',
      '& .loggedInText': {
        width: '100%',
        fontSize: 20,
      },
    },
    '@media screen and (max-width: 500px)': {
      form: {
        width: 'auto',
      },
      logoutWrapper: {
        width: 'auto',
      },
    },
  })