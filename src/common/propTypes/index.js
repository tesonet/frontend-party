import PropTypes from 'prop-types';

export const withDefaultChildrenPropTypes = {
  children: null,
};

export const withChildrenPropTypes = {
  children: PropTypes.node,
};

export const withErrorWrapperPropTypes = {
  errorHandler: PropTypes.shape({
    showError: PropTypes.func,
    hideError: PropTypes.func,
  }).isRequired,
};
