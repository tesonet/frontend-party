import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppLogo from '../images/logo-w.svg';
import Background from '../images/bg@2x.jpg';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
// Icons
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

// Redux stuff
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

const styles = theme => ({
  ...theme.spreadThis,
  page: {
    width: '100%',
    height: '100vh',
    minHeight: 400,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${Background})`
  },
  inputStyles: {
    color: '#999'
  }
});

class login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      errors: {}
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {
      classes,
      UI: { loading }
    } = this.props;
    const { errors } = this.state;
    return (
      <div className={classes.page}>
        <Grid
          direction='row'
          container
          spacing={0}
          className={classes.form}
          alignItems='center'
          justify='center'
          style={{ minHeight: '100vh' }}
        >
          <Grid item sm />
          <Grid item sm>
            <img src={AppLogo} alt='appImg' className={classes.image} />
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                id='username'
                name='username'
                type='username'
                placeholder='Username'
                className={classes.textField}
                helperText={errors.username}
                value={this.state.username}
                onChange={this.handleChange}
                fullWidth
                color='secondary'
                variant='outlined'
                InputProps={{
                  className: classes.inputStyles,
                  startAdornment: (
                    <InputAdornment position='start'>
                      <PersonIcon />
                    </InputAdornment>
                  )
                }}
              />

              <TextField
                id='password'
                name='password'
                type='password'
                placeholder='Password'
                className={classes.textField}
                helperText={errors.password}
                value={this.state.password}
                onChange={this.handleChange}
                fullWidth
                color='secondary'
                variant='outlined'
                InputProps={{
                  className: classes.inputStyles,
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LockIcon />
                    </InputAdornment>
                  )
                }}
              />

              <Button
                type='submit'
                variant='contained'
                fullWidth
                className={classes.button}
                disabled={loading}
              >
                Log In
                {loading && (
                  <CircularProgress size={25} className={classes.progress} />
                )}
              </Button>

              {errors.message && (
                <Typography variant='body2' className={classes.customError}>
                  Wrong credentials, please try again...
                </Typography>
              )}
            </form>
          </Grid>
          <Grid item sm />
        </Grid>
      </div>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(login));
