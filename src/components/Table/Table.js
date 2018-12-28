import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import TableItem from './TableItem/TableItem';
import AlertMessage from '../AlertMessage/AlertMessage';


class Table extends Component {

    render () {
        let results = null;
        let screenResult = <Spinner />;
        if (!this.props.loading && this.props.results !== null && this.props.error == null ) {

            results = this.props.results.map(( rslt, index) => 
                <TableItem 
                key={index}
                titleName={rslt.name} 
                titleDistance={rslt.distance}
                />);
    
            screenResult = (
            <table className="table table-hover">
                <tbody className="table-results">
                    {results} 
                </tbody>                   
            </table>);
                    
        } else if (!this.props.loading) {
            screenResult = <AlertMessage/>;
            } else {
                screenResult = <Spinner />;
            }

        return (
            <div className="logged-table">
                {screenResult}
            </div>
        );
    }
} 

const mapStateToProps = state => {
    return {
        results: state.results.data,
        loading: state.results.loading,
        error: state.results.error
    };
}

export default connect(mapStateToProps)(Table);