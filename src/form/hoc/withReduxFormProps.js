import PropTypes from 'prop-types';
import {compose, getContext, mapProps} from 'recompose';


const withReduxFormProps = (propsMapper = _reduxForm => ({form: _reduxForm.form})) => compose(
  getContext({_reduxForm: PropTypes.object}),
  mapProps(({_reduxForm, ...props}) => ({...propsMapper(_reduxForm), ...props})),
);

export default withReduxFormProps;
