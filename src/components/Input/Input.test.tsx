import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import Input from './Input';
import { IProps } from './Input.interface';

const createProps = (props: IProps) => ({
  ...props,
});

describe('Input', (): void => {
  it('renders', (): void => {
    const placeholder = 'username';
    const type = 'text';
    const onChange = jest.fn();
    const value = '';

    const props = createProps({ placeholder, type, onChange, value });
    const { getByPlaceholderText } = render(<Input {...props} />);

    expect(getByPlaceholderText(placeholder)).toBeVisible();
  });

  it('displays value', (): void => {
    const placeholder = 'username';
    const type = 'text';
    const onChange = jest.fn();
    const value = 'tesonet';

    const props = createProps({ placeholder, type, onChange, value });
    const { getByDisplayValue } = render(<Input {...props} />);

    expect(getByDisplayValue(value)).toBeVisible();
  });

  it('hides password', (): void => {
    const placeholder = 'Password';
    const type = 'password';
    const onChange = jest.fn();
    const value = 'secret';

    const props = createProps({ placeholder, type, onChange, value });
    const { container, queryByText } = render(<Input {...props} />);

    expect(queryByText(value)).toBeNull();

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="md:flex md:items-center mb-6"
        >
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 focus:text-input-active leading-tight focus:outline-none focus:bg-white focus:border-branc-main"
            placeholder="Password"
            type="password"
            value="secret"
          />
        </div>
      </div>
    `);
  });
});
