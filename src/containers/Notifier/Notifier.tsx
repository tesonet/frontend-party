import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { clearCurrent } from '../../store/modules/notification/actions';

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

interface Props {
    message: string | null,
    onClose: () => void,
}

const Notifier = (props: Props) => {
  const { message, onClose } = props;

  const classes = useStyles();

  const handleClose = (event: any, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }

    onClose();
  };

  return (
    message ? (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={(
          <span id="message-id">{message}</span>
        )}
        action={[
          // @ts-ignore
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    ) : null
  );
};

const mapStateToProps = (state: any) => ({
  message: state.notification.current,
});

const mapDispatchToProps = ({
  onClose: clearCurrent,
});
export default connect(mapStateToProps, mapDispatchToProps)(Notifier);
