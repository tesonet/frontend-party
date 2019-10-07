import { ErrorMessage, ErrorMessageProps } from 'formik';
import * as React from 'react';

const FormikErrorMessage: React.FunctionComponent<ErrorMessageProps> = ({
  children,
  ...props
}) => <ErrorMessage {...props}>{children}</ErrorMessage>;

export { FormikErrorMessage as ErrorMessage };
