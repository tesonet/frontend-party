import PropTypes from 'prop-types';


export default {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    value: PropTypes.any,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onDragStart: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
  }),
  meta: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    asyncValidating: PropTypes.bool.isRequired,
    autoFilled: PropTypes.bool,
    dirty: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    error: PropTypes.any,
    form: PropTypes.string.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitFailed: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired,
    visited: PropTypes.bool.isRequired,
  }),
};
