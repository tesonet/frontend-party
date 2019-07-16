import React, { PureComponent, Fragment } from 'react';
import { func, array } from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/header';
import Button from '../components/buttons';
import { logout, getList, sortByName, sortByDistance } from '../redux/actions/actions';

import styles from './Dashboard.less';

class Dashboard extends PureComponent {
    componentDidMount() {
        this.props.getList();
    }

    buttonClickHandler = () => {
        this.props.logout();
    };

    sortByName = () => {
        this.props.sortByName();
    }

    sortByDistance = () => {
        this.props.sortByDistance();
    };

    render() {
        const { data } = this.props;

        return (
            <Fragment>
                <Header>
                    <Button
                        onClick={this.buttonClickHandler}
                        iconBefore
                        iconName="input"
                        type="transparent"
                        size="small"
                    >
                        Logout
                    </Button>
                </Header>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th onClick={this.sortByName}>Server</th>
                            <th onClick={this.sortByDistance}>Distance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr className="row" key={index}>
                                <td>{row.name}</td>
                                <td>
                                    {row.distance}
                                    km
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

Dashboard.propTypes = {
    getList: func,
    sortByDistance: func,
    sortByName: func,
    logout: func,
    data: array
};


const mapStateToProps = state => (
    {
        data: state.reducer.data,
        error: state.error
    }
);

const mapDispatchToProps = dispatch => (
    {
        logout: () => dispatch(logout()),
        getList: () => dispatch(getList()),
        sortByDistance: () => dispatch(sortByDistance()),
        sortByName: () => dispatch(sortByName())
    }
);

const WrappedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default WrappedDashboard;
