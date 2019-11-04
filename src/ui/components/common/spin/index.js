import React from 'react';

import './spin.css';

export default class Spin extends React.PureComponent {
    render() {
        return (
            <div className={'lds-dual-ring'}/>
        );
    }
}
