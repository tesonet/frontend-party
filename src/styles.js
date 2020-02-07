import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(theme => ({
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        backgroundColor: 'white',
        opacity: '0.5'
    },
    preloader: {
        position: 'absolute',
        top: '50%',
        left: '50%'
    }
}))