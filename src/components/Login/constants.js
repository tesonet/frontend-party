import Yup from 'yup';

import { FORM_AUTH } from '../../constants/forms';

// Auth form configuration
export const FORM_AUTH_CONFIG = {
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  }),
  handleSubmit: (values, { setSubmitting, props: { login } }) => {
    login(values.username, values.password);
    setSubmitting(false);
  },
  displayName: FORM_AUTH,
};
