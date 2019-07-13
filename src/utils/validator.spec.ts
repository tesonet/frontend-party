import validator, { maxLength, required } from './validator';

describe('Required string validator', () => {
    test('should return validation error if empty string', () => {
        expect(required('')).toBe('Required');
    });

    test('should return validation error if empty string with spaces', () => {
        expect(required(' ')).toBe('Required');
    });

    test('should return null if string is not empty', () => {
        expect(required('a')).toBe(null);
    });
});

describe('Max length string validator', () => {
    const max = 8;
    const maxValidator = maxLength(max);

    test('should return validation error if string length is equal to max length', () => {
        expect(maxValidator('a'.repeat(max))).toBe(`Value should be less than ${max} characters`);
    });

    test('should return null if string length is less than max length', () => {
        expect(maxValidator('a'.repeat(max - 1))).toBe(null);
    });
});

describe('Validation runner', () => {
    const validationRunner = validator({
        test1: [() => null, () => 'error1', () => 'error2'],
        test2: [() => 'error3'],
    });

    test('should return object with first error message', () => {
        expect(validationRunner({ test1: '' }, {})).toStrictEqual({ test1: 'error1' });
    });

    test('should overwrite old errors', () => {
        expect(validationRunner({ test1: '' }, { test1: 'error2' })).toStrictEqual({ test1: 'error1' });
    });

    test('should only test values from value object', () => {
        expect(validationRunner({ test1: '' }, { test1: 'error1', test2: 'error1' })).toStrictEqual({
            test1: 'error1',
            test2: 'error1',
        });
    });

    test('should test more than one value', () => {
        expect(validationRunner({ test1: '', test2: '' }, {})).toStrictEqual({
            test1: 'error1',
            test2: 'error3',
        });
    });
});
