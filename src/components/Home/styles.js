import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root: {
        width: '100%',
        margingLeft: '45px'
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(1)
    },
    table: {
        minWidth: 400
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    row: {
        backgroundColor: '#f5f5f5',
    },
    headCell: {
        color: '#999999',
        textTransform: 'uppercase'
    },
    cell: {
        color: '#666666'
    }
}));