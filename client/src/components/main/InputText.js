import React from 'react';
import { connect } from 'react-redux';
import './InputText.scss';

class InputText extends React.Component {
  action = (e) => {
    if (typeof this.props.action === 'function') this.props.dispatch(this.props.action(e.target.value));
  }

  render() {
    const options = this.props.options || {};
    const { type = 'text', placeholder = '', icon = '' } = options;
    return (
      <div className="InputText">
        <div className="icon" style={{ backgroundImage: `url(${icon})` }}></div>
        <input type={type} placeholder={placeholder} onChange={this.action} />
      </div>
    )
  }
}

export default connect()(InputText);