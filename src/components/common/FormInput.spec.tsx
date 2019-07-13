import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import FormInput from './FormInput';

describe('Form input', () => {
    test('should have a single input field', () => {
        const { getByTestId, queryAllByTestId } = render(<FormInput />);

        expect(queryAllByTestId('input').length).toEqual(1);
        expect(getByTestId('input')).toBeVisible();
    });

    test('should show error', () => {
        const error = 'error';
        const { getByTestId } = render(<FormInput error={error} />);

        expect(getByTestId('error')).toBeVisible();
        expect(getByTestId('error')).toHaveTextContent(error);
    });

    test('should focus input on container click', () => {
        const { getByTestId } = render(<FormInput />);

        fireEvent.click(getByTestId('input-container'));

        expect(getByTestId('input')).toHaveFocus();
    });
});
