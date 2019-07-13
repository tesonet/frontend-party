import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import FormButton from './FormButton';

describe('Form button', () => {
    test('should have a single input field', () => {
        const { getByTestId, queryAllByTestId } = render(<FormButton />);

        expect(queryAllByTestId('input').length).toEqual(1);
        expect(getByTestId('input')).toBeVisible();
    });

    test('should show spinner', () => {
        const { getByTestId } = render(<FormButton loading />);

        expect(getByTestId('spinner')).toBeVisible();
    });

    test('should not show spinner', () => {
        const { queryByTestId } = render(<FormButton loading={false} />);

        expect(queryByTestId('spinner')).not.toBeInTheDocument();
    });
});
