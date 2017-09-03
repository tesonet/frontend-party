import {connect} from 'react-redux';
import {getFormSubmitErrors} from 'redux-form';
import {compose} from 'recompose';
import _ from 'lodash';

import {withReduxFormProps} from '../hoc';
import ErrorDisplayer from './ErrorDisplayer';


const enhance = compose(
  withReduxFormProps(),
  connect((state, {form, name}) => ({error: _.get(getFormSubmitErrors(form)(state), name)})),
);

export default enhance(ErrorDisplayer);
