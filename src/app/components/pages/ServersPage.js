import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';

import i18n from '~/i18n';
import auth from '~/auth';

import {Badge, Button, FAIcon} from '../';


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;


const ServersPage = ({logout}) => (
  <div>
    <div className='container-fluid'>
      <Header>
        <Badge small />
        <Button styleType='link' onClick={logout}>
          <FAIcon type='sign-out' className='fa-rotate-180' />&nbsp;&nbsp;{i18n.t('button.logout')}
        </Button>
      </Header>
    </div>
    <div>
      Servers
    </div>
  </div>
);

ServersPage.propTypes = {
  logout: PropTypes.func.isRequired,
};

const enhance = connect(
  null,
  dispatch => ({
    logout() {
      return dispatch(auth.actions.logout());
    },
  }),
);

export default enhance(ServersPage);
