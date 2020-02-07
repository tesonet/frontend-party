import background from "../../assets/background.png";
import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root: {
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundColor: '#0b0f27',
        '.Mui-focused': {
            backgroundColor: 'red',
            color: 'green'
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.light,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        color: 'white'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        "&:hover": {
            backgroundColor: "#94d600"
        },
        padding: '15px'
    },
    input: {
        color: 'black',
        backgroundColor: '#e6e2e7',
        '&$cssFocused $notchedOutline': {
            borderColor: `${theme.palette.primary.main} !important`,
        }
    },
    cssFocused: {
        backgroundColor: '#999'
    },
    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'green !important'
    },
    icons: {
        color: '#c8c8c8'
    },
    failedLogin: {
        color: 'red',
        padding: theme.spacing(1, 2),
        display: 'flex'
    },
    errorIcon: {
        paddingRight: '5px'
    }
}))