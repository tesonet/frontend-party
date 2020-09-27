import { SubmissionError } from 'redux-form';

const resolveLoginError = (error) => {
    if (
        error.response
        && error.response.status === 401
    ) {
        throw new SubmissionError({ _error: 'Wrong credentials!' });
    }
    throw new SubmissionError({ _error: 'Unknown error' });
};

export default resolveLoginError;
