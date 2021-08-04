import React from 'react';
import { render, screen } from '@testing-library/react';

import withReduxStore from '../../../tests/withReduxStore';
import InputField from '../InputField';

describe('InputField', () => {
  it('should render', () => {
    const name = 'magicField';
    const props = {
      name,
      label: 'inputFieldLabel',
      placeholder: 'magic placeholder',
      type: 'text',
    };

    const formOptions = {
      form: 'test',
      initialValues: {
        [name]: 'magic content',
      },
    };

    const Component = withReduxStore(InputField, formOptions, props);
    const container = render(<Component />);

    const input = container.getByPlaceholderText(props.placeholder);

    expect(screen.getByText(props.label)).toBeInTheDocument();
    expect(input.name).toStrictEqual(props.name);
    expect(input.type).toStrictEqual(props.type);
    expect(input.value).toStrictEqual(formOptions.initialValues[name]);
  });
});
