import React from 'react';
import {
  Button, Grid, InputAdornment, makeStyles, CircularProgress,
} from '@material-ui/core';
import { Form, Formik, FormikValues } from 'formik';
import { object, string } from 'yup';
import { Lock, Person } from '@material-ui/icons';
import { connect } from 'react-redux';
import FormTextField from 'components/FormTextField/FormTextField';
import { init } from 'store/modules/authentication/actions';
import { FIELD_LABELS, FIELDS, INITIAL_VALUES } from './constants';
import { createLoadingSelector } from '../../store/modules/loading/selectors';
import * as AUTHENTICATION_ACTION_TYPES from '../../store/modules/authentication/constants';

const validationSchema = object()
  .shape({
    [FIELDS.USERNAME]: string()
      .required('Enter an email'),
    [FIELDS.PASSWORD]: string()
      .required('Enter a password'),
  });

const useStyle = makeStyles(({
  root: {
    maxWidth: 360,
  },
}));

interface Props {
  authorize: (username: string, password: string) => void,
  isLoading: boolean;
}

const LoginForm = (props: Props) => {
  const classes = useStyle();
  const { authorize, isLoading } = props;

  const handleSubmit = async (values: FormikValues) => {
    const { [FIELDS.USERNAME]: username, [FIELDS.PASSWORD]: password } = values;
    authorize(username, password);
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {
        (formikProps) => (
          <Form className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormTextField
                  name={FIELDS.USERNAME}
                  label={FIELD_LABELS[FIELDS.USERNAME]}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormTextField
                  name={FIELDS.PASSWORD}
                  label={FIELD_LABELS[FIELDS.PASSWORD]}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button disabled={!formikProps.isValid || isLoading} type="submit" size="large" fullWidth>
                  {
                    isLoading ? (
                      <CircularProgress size={26} />
                    ) : 'Log In'
                  }
                </Button>
              </Grid>
            </Grid>
          </Form>
        )
      }
    </Formik>
  );
};

const loadingSelector = createLoadingSelector([
  AUTHENTICATION_ACTION_TYPES.AUTH_REQUEST,
]);

const mapStateToProps = (state: any) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = ({
  authorize: init,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
