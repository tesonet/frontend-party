export const isErrorDisplayable = error => error != null && Object.keys(error).length > 0;


export const fieldHasError = ({touched, error}) => touched && isErrorDisplayable(error);
