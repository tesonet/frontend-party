import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ServersPageItem from '../../components/ServersPageItem';
import LoadingBackground from '../../components/LoadingBackground';
import LoadingIndicator from '../../components/LoadingIndicator';
import Header from '../../containers/Header';
import './styles.scss';

class ServersPage extends Component {

  componentDidMount() {
    this.props.onCompMount();
  }

  render() {
    if (this.props.loading) {
          return <LoadingBackground component={LoadingIndicator} />;
     }

    return (
      <div>
        <Header />
         <div className='row'>
           <div className='card container'>
             <div className='card-header'>
               <ServersPageItem name='Server' distance='Distance' />
             </div>
             <ul className='list-group list-group-flush'>
             {this.props.serversList &&
               this.props.serversList.map(( item, index) => (
                 <li key={item.name + item.distance} className='list-group-item'>
                   <ServersPageItem name={item.name} distance={item.distance} />
                 </li>
              ))}
             </ul>
           </div>
         </div>
      </div>
    );
  }
}

ServersPage.propTypes= {
 onCompMount:PropTypes.func.isRequired,
 loading: PropTypes.bool,
 serversList: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};


const mapStateToProps = state => {
  return {
      serversList: state.serversList,
      loading: state.loading,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onCompMount: evt =>
      dispatch({
        type: "FETCH_SERVERS_LIST_BEGIN",
      })
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
withRouter,
withConnect,
)(ServersPage);