import { isNil, pipe, prop } from 'ramda';
import { connect } from 'react-redux';
import { branch, compose } from 'recompose';
import { reduxForm, SubmissionError } from 'redux-form';
import Login from './Component';
import validate from './validate';
import redirectToRoot from './redirectToRoot';
import { FORM_ID, submit } from '../ducks';
import withToken from '../withToken';

export default compose(
  // get token from store
  withToken,
  branch(
    // if token is null
    pipe(prop('token'), isNil),
    // render login screen
    compose(
      // need to be careful with action names, because
      // reduxForm provides methods `submit` and `onSubmit`
      connect(null, {
        onFormSubmit: submit,
      }),
      reduxForm({
        form: FORM_ID,
        // set initial values for testing
        // initialValues: {
        //   username: 'tesonet',
        //   password: 'partyanimal',
        // },
        // onSubmit handler, here we do validation
        onSubmit: values =>
          new Promise(resolve => {
            const errors = validate(values);
            if (errors) {
              throw new SubmissionError(errors);
            }
            // we can pass something here to `onSubmitSuccess` callback
            resolve();
          }),
        // validation was successful
        onSubmitSuccess: (result, dispatch, { onFormSubmit }) => onFormSubmit(),
      }),
    ),
    // redirect to app root
    redirectToRoot,
  ),
)(Login);
