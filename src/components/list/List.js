import React, { useEffect, useCallback } from 'react';
import { FiLogOut as LogOutIcon } from 'react-icons/fi';
import PropTypes from 'prop-types';

import logoDarkImgPath from '../../assets/images/logo_dark.png';
import { apiFetchServers } from '../../redux/list/actions.js';
import { logOut } from '../../redux/auth/actions.js';
import {
  Header,
  ListWrapper,
  ListRow,
  ListHeader,
  ErrorRow,
  LogOutIconWrapper,
  LogOutButton,
  RetryButton,
} from './ListStyledComponents.js';

const List = (props) => {
  const { dispatch, list, listLoading, listError } = props;

  const fetchData = useCallback(() => {
    dispatch(apiFetchServers());
  }, []);
  useEffect(() => {
    fetchData();
  }, []);

  const handlelogOut = useCallback(() => {
    dispatch(logOut());
  }, []);

  return (
    <div className="container">
      <Header>
        <img src={logoDarkImgPath} alt="testio logo" />
        <LogOutButton data-testid="logout-button" onClick={handlelogOut}>
          <LogOutIconWrapper>
            <LogOutIcon />
          </LogOutIconWrapper>
          Logout
        </LogOutButton>
      </Header>
      <ListWrapper>
        <ListHeader>
          <div>Server</div>
          <div>Distance</div>
        </ListHeader>
        {listLoading && <ListRow>Fetching data...</ListRow>}
        {listError != null && (
          <ErrorRow>
            <span>
              {listError}
              <RetryButton className="btn btn-primary" onClick={fetchData}>
                Try again
              </RetryButton>
            </span>
          </ErrorRow>
        )}
        {list != null &&
          (list.length === 0 ? (
            <ListRow>No servers to display.</ListRow>
          ) : (
            list.map((listItem, i) => {
              return (
                <ListRow key={i}>
                  <div>{listItem.name}</div>
                  <div>{listItem.distance} km</div>
                </ListRow>
              );
            })
          ))}
      </ListWrapper>
    </div>
  );
};

export default List;

List.propTypes = {
  dispatch: PropTypes.func.isRequired,
  listLoading: PropTypes.bool.isRequired,
  list: PropTypes.array,
  listError: PropTypes.string,
};
