import React from 'react';
import { serverSpinner } from '../../../assets';
import './Spinner.scss';

const Spinner = props => (
  <div>
    {props.spinnerType === 'loginSpinner' ? (
      <div className="bubbles_container">
        <div className="bubbles bubble_1" />
        <div className="bubbles bubble_2" />
        <div className="bubbles bubble_3" />
      </div>
    ) : props.spinnerType === 'serverSpinner' ? (
      <img src={serverSpinner} alt="Server Spinner" style={{ width: 100 }} />
    ) : (
      'Spinner type not defined.'
    )}
  </div>
);

export default Spinner;
