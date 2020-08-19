import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions';
import history from '../history';

class ResultHeader extends React.Component{

  onSignOutClick = () => {
    this.props.signOut();
    history.push('/');
  };

  render(){
    return(
      <header className="header">
          <div className="header__side">
            <img className="header__img" src="./img/small-logo.svg" alt="testio" title="testio" />
          </div>
          <div className="header__side header__side--right">
            <button className="header__btn" onClick={this.onSignOutClick}>Logout</button>
          </div>
      </header>
    );
  };
};

const mapStateToProps = (state) => {
  return({
    isSignedIn: state.auth.isSignedIn,
    credentials: state.auth.credentials
  });
}

export default connect( mapStateToProps, {
    signOut: signOut
})(ResultHeader);
