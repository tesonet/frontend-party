import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../UI/Spinner/Spinner';
import TableItem from './TableItem/TableItem';
import AlertMessage from '../UI/AlertMessage';
import './Table.scss';

const Table = props => {
  
    let results = null;
    let screenResult = <Spinner />;
    if (!props.loading && props.results !== null && props.error == null ) {

        results = props.results.map(( rslt, index) => 
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
                
    } else if (!props.loading) {
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

const mapStateToProps = state => {
    return {
        results: state.results.data,
        loading: state.results.loading,
        error: state.results.error
    };
}

Table.propTypes = {
    error: PropTypes.string,
    results: PropTypes.array,
    loading: PropTypes.bool
}

export default connect(mapStateToProps)(Table);