import * as Yup from 'yup';
import errorMessages from './errorMessages';

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .label('username')
    .required(errorMessages.NO_USERNAME),
  password: Yup.string()
    .label('password')
    .required(),
});
