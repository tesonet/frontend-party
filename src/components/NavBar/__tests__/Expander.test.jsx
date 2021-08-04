import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Expander from '../Expander';

describe('Expander', () => {
  it('should render', () => {
    const setIsExpanded = jest.fn();
    const isExpanded = true;

    render(<Expander isExpanded={isExpanded} setIsExpanded={setIsExpanded} />);

    const expanderIcon = document.querySelector('svg');

    fireEvent.click(expanderIcon);

    expect(setIsExpanded).toBeCalledWith(!isExpanded);
  });
});
