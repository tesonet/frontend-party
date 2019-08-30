import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import Branding from './Branding';
import { IProps } from './Branding.interface';

const createProps = (props: IProps) => ({
  ...props,
});

describe('Branding', (): void => {
  it('renders text', (): void => {
    const textColor = 'text-white';
    const props = createProps({ textColor });
    const { getByText, container } = render(<Branding {...props} />);
    expect(getByText('testio')).toBeVisible();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="text-6xl font-extrabold text-white"
        >
          testio
          <span
            class="text-brand-main"
          >
            .
          </span>
        </div>
      </div>
    `);
  });
});
