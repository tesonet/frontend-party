import React from 'react';
import { Button, Grid, InputAdornment } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import { Person, Lock } from '@material-ui/icons';
import { connect } from 'react-redux';
import { FIELD_LABELS, FIELDS, INITIAL_VALUES } from './constants';
import FormTextField from '../../components/FormTextField/FormTextField';
import { init as authorize } from '../../store/modules/authentication/actions';

const validationSchema = object()
  .shape({
    [FIELDS.USERNAME]: string()
      .required('Enter an email'),
    [FIELDS.PASSWORD]: string()
      .required('Enter a password'),
  });


const LoginForm = (props) => {
  const handleSubmit = async (values) => {
    const { [FIELDS.USERNAME]: username, [FIELDS.PASSWORD]: password } = values;
    props.authorize(username, password);
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {
        (formikProps) => (
          <Form>
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
                <Button disabled={!formikProps.isValid} type="submit" size="large" fullWidth>
                  Log In
                </Button>
              </Grid>
            </Grid>
          </Form>
        )
      }
    </Formik>
  );
};

const mapDispatchToProps = ({
  authorize,
});

export default connect(null, mapDispatchToProps)(LoginForm);
