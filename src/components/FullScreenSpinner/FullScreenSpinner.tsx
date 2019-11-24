import React from 'react';
import {
  CircularProgress, Grid, makeStyles, Typography,
} from '@material-ui/core';

const useStyle = makeStyles((theme: any) => ({
  root: {
    height: '100vh',
    minHeight: 'max-content',
    padding: theme.spacing(4),
    display: 'flex',
  },
}));

const FullScreenSpinner = ({ message }: any) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Grid
        spacing={3}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <CircularProgress />
        </Grid>
        {
                    message && (
                    <Grid item>
                      <Typography variant="h6">{message}</Typography>
                    </Grid>
                    )
                }
      </Grid>
    </div>
  );
};

FullScreenSpinner.defaultProps = {
  message: undefined,
};

export default FullScreenSpinner;
