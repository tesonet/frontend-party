import React from 'react';
import { connect } from 'react-redux';
import history from '../history';
import orderBy from 'lodash.orderby';
import ResultHeader from './ResultHeader';
import { fetchServers } from '../../actions'

class ResultPage extends React.Component{

  componentDidMount(){
    if(this.props.isSignedIn){
      this.props.fetchServers(this.props.credentials);
    } else {
      history.push("/");
    }
  };

  renderList(){
    const servers = orderBy(this.props.list, ['name', 'distance']);

    return servers.map(server => {
      return(
        <div className="result__row" key={server.name+server.distance}>
          <div className="result__part result__part--left">{server.name}</div>
          <div className="result__part">{`${server.distance} km`}</div>
        </div>
      );
    });
  };

  render(){
    return(
      <>
        <ResultHeader />
        <div className="result">
          <div className="result__row result__row--header">
            <div className="result__part result__part--left">Server</div>
            <div className="result__part">Distance</div>
          </div>
          {this.renderList()}
        </div>
      </>
    );
  };
};

const mapStateToProps = (state) => {
  return({
    list: state.list.servers,
    credentials: state.auth.credentials,
    isSignedIn: state.auth.isSignedIn
  });
}

export default connect(mapStateToProps, {
  fetchServers: fetchServers
})(ResultPage);
