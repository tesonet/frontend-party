import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import history from '../history';
import orderBy from 'lodash.orderby';
import ResultHeader from './ResultHeader';
import { fetchServers } from '../../actions'

const ResultPage = () => {
  const isSignedIn = useSelector(state => state.auth.isSignedIn);
  const credentials = useSelector(state => state.auth.credentials);
  const serversList = useSelector(state => state.list.servers);

  const dispatch = useDispatch();

  useEffect(() => {
    if(isSignedIn){
      dispatch(fetchServers(credentials));
    } else {
      history.push("/");
    }
  }, []);

  const renderList = () => {
    const servers = orderBy(serversList, ['name', 'distance']);

    return servers.map(server => {
      return(
        <div className="result__row" key={server.name+server.distance}>
          <div className="result__part result__part--left">{server.name}</div>
          <div className="result__part">{`${server.distance} km`}</div>
        </div>
      );
    });
  };

  return(
    <>
      <ResultHeader />
      <div className="result">
        <div className="result__row result__row--header">
          <div className="result__part result__part--left">Server</div>
          <div className="result__part">Distance</div>
        </div>
        {renderList()}
      </div>
    </>
  );
}

export default ResultPage;
