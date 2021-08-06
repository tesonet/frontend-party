import React from 'react';
import { render, screen } from '@testing-library/react';

import withErrorWrapper from '../withErrorWrapper';
import { useErrorWrapperAlertState } from '../../hooks';

jest.mock('../../hooks/useErrorWrapperAlertState');

describe('withErrorWrapper', () => {
  it('should render with error wrapper', () => {
    const errorMessage = 'error';
    const childrenText = 'I am inside error wrapper';

    useErrorWrapperAlertState.mockImplementation(() => ({
      isErrorShown: true,
      errorMessage,
      hideError: jest.fn(),
      showError: jest.fn(),
    }));

    const componentToWrap = () => (
      <div>
        {childrenText}
      </div>
    );

    const WrappedComponent = withErrorWrapper(componentToWrap);

    render(<WrappedComponent />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });
});
