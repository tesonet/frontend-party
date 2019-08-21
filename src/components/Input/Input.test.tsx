import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';
import { IProps } from './Input.interface';

const createProps = (props: IProps) => ({
  ...props,
});

describe('Button', (): void => {
  it('renders text', (): void => {
    const placeholder = 'username';
    const type = 'text';
    const props = createProps({ placeholder, type });
    const { container, getByPlaceholderText } = render(<Input {...props} />);

    const inputEl = getByPlaceholderText(placeholder);
    const input = 'John Doe';
    fireEvent.change(inputEl, { target: { value: input } });

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="md:flex md:items-center mb-6"
        >
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 focus:text-input-active leading-tight focus:outline-none focus:bg-white focus:border-branc-main"
            placeholder="username"
            type="text"
            value="John Doe"
          />
        </div>
      </div>
    `);
  });

  it('hides password', (): void => {
    const placeholder = 'Password';
    const type = 'password';
    const props = createProps({ placeholder, type });
    const { container, queryByText, getByPlaceholderText } = render(<Input {...props} />);

    const inputEl = getByPlaceholderText(placeholder);
    const input = 'secret';
    fireEvent.change(inputEl, { target: { value: input } });
    expect(queryByText(input)).toBeNull();

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
