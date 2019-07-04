import React from 'react';
import { connect } from 'react-redux';
import './Spinner.css';

export const SpinnerConnectable: React.FC<{showSpinner: boolean, children: any}> = (props: {showSpinner: boolean,  children: any}) => (
  <div>
    {props.showSpinner && 
      <div>
        <div className='spinner-overlay' />
        <div className='spinner-icon-container'>
          <div className='spinner-icon' />
        </div>
      </div>
    }
    {props.children}
  </div>
);

export const Spinner = connect((store: any, ownProps: any) => ({showSpinner: store.spinner}))(SpinnerConnectable);