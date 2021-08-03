import React from 'react';
import { render, screen } from '@testing-library/react';

import CommonContainer from '../CommonContainer';

describe('CommonContainer', () => {
  it('should render', () => {
    const childrenText = 'testChildrenText';

    render(<CommonContainer>{childrenText}</CommonContainer>);

    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });
});
