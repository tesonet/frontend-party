import PropTypes from 'prop-types';
import {
  ASCENDING,
  DESCENDING,
  NAME,
  DISTANCE,
} from '../config/constants';

export const sortConfigDefaultProps = {
  [DISTANCE]: null,
  [NAME]: null,
};

export const sortConfigPropTypes = PropTypes.shape({
  [DISTANCE]: PropTypes.oneOf([ASCENDING, DESCENDING]), // TODO: export to proptype
  [NAME]: PropTypes.oneOf([ASCENDING, DESCENDING]),
});

export const serverPropTypes = PropTypes.shape({
  [NAME]: PropTypes.string,
  [DISTANCE]: PropTypes.number,
});
