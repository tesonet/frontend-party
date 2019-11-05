import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './spin.css';

export default class Spin extends React.PureComponent {
    static defaultProps = {
        size: 'small',
        color: 'white',
    };

    static propTypes = {
        size: PropTypes.string,
        color: PropTypes.string,
    };

    render() {
        const { size, color } = this.props;
        return (
            <div className={`lds-dual-ring ${size} ${color}`}/>
        );
    }
}
