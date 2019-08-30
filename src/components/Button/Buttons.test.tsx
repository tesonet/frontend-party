import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import Button from './Button';
import { IProps } from './Button.interface';
import { StaticRouter } from 'react-router';

const createProps = (props: IProps) => ({
  ...props,
});

describe('Button', (): void => {
  it('renders text', (): void => {
    const text = 'click me';
    const props = createProps({ text });
    const { getByText } = render(
      <StaticRouter>
        <Button {...props} />
      </StaticRouter>
    );
    expect(getByText(text)).toBeVisible();
  });
});
