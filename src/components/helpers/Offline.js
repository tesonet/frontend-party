import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

class Offline extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            offline: false,
        };

    }

    componentDidMount() {

        let status = navigator.onLine ? 'online' : 'offline';

        const updateOnlineStatus = (status) => {
            switch (status.type.toUpperCase()) {
                case 'ONLINE':
                    this.setState({
                        offline: false,
                    });
                    break;
                case 'OFFLINE':
                    this.setState({
                        offline: true,
                    });
                    break;
                default:
                    break;
            }
        }

        updateOnlineStatus({ type: status });
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
    }

    render() {
        const { offline } = this.state;
        const { text } = this.props;
        return (
            <div>
                <Alert id="offline-alert" color="warning" className={offline ? 'mb-0 text-center' : 'hidden mb-0 text-center'}>
                    {text}
                </Alert>
            </div >
        );
    }
}

Offline.propTypes = {
    text: PropTypes.string.isRequired
}

export default Offline;