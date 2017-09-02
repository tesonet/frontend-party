export const fieldHasError = ({touched, error}) => touched && error != null && Object.keys(error).length > 0;
