import React from 'react';
import { connect } from 'react-redux';
import './ActionButton.scss';

class ActionButton extends React.Component {
  action = (e) => {
    const { action, dispatch} = this.props;
    if (typeof action === 'function') dispatch(action());
  }

  render() {
    const options = this.props.options || {};
    const { text, icon } = options;

    return (
      <div className="ActionButton">
        <button onClick={this.action}>
          {icon && <div className="icon" style={{ backgroundImage: `url(${icon})` }}></div>}
          <span>{text || 'button'}</span>
        </button>
      </div>
    )
  }
}

export default connect()(ActionButton);