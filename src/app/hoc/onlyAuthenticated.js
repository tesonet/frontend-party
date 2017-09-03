import {connect} from 'react-redux';
import {compose, branch, renderComponent} from 'recompose';

import auth from '~/auth';

import {LoginPage} from '../components/pages';


const onlyAuthenticated = compose(
  connect(state => ({isAuthenticated: auth.selectors.isAuthenticated(state)})),
  branch(props => !props.isAuthenticated, renderComponent(LoginPage)),
);

export default onlyAuthenticated;
