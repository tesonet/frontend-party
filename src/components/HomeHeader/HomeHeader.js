import React from "react";
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import styles from './styles'
import logo from "../../assets/tesioLogoHome.png";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import actions from './actions'

export default function HomeHeader  (props) {
    const classes = styles();
    const { numSelected } = props;
    const {handleLogout} = actions()

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            <Typography className={classes.title} variant="h6" id="tableTitle">
                <img src={logo} alt="logo"/>
            </Typography>

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                    <IconButton id='logout' onClick={handleLogout} className={classes.logout}>
                        <ExitToAppIcon fontSize='small'/>
                        Logout
                    </IconButton>
            )}
        </Toolbar>
    );
};

HomeHeader.propTypes = {
    numSelected: PropTypes.number.isRequired,
};