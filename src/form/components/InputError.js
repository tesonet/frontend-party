import {branch, renderNothing} from 'recompose';

import {fieldHasError} from '../utils';
import ErrorDisplayer from './ErrorDisplayer';


const enhance = branch(({touched, error}) => !fieldHasError({touched, error}), renderNothing);

export default enhance(ErrorDisplayer);
