import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import Button from './Button';
import { IProps } from './Button.interface';

const createProps = (props: IProps) => ({
  ...props,
});

describe('Button', (): void => {
  it('renders text', (): void => {
    const text = 'click me';
    const onClick = jest.fn();
    const props = createProps({ text, onClick });
    const { getByText } = render(<Button {...props} />);
    expect(getByText(text)).toBeVisible();
  });
});
