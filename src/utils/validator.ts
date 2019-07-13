export const required = (value: string): string | null => (value.trim() ? null : 'Required');
export const maxLength = (length: number) => (value: string): string | null =>
    value && value.length < length ? null : `Value should be less than ${length} characters`;

type ValidationsType = {
    [key: string]: ((value: any) => any)[];
};

type ValuesType = {
    [key: string]: string;
};

export type ErrorType = {
    [key: string]: string | null;
};

export default (validations: ValidationsType) => (values: ValuesType, errorObj: ErrorType): ErrorType =>
    Object.keys(values).reduce(
        (errors, key) => ({
            ...errors,
            [key]: validations[key].reduce((message, validation) => {
                if (message) {
                    return message;
                }

                return validation(values[key]);
            }, null),
        }),
        errorObj
    );
