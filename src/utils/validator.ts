export const required = value => (value.trim() ? null : 'Required');
export const maxLength = length => value =>
    value && value.length < length ? null : `Value should be less than ${length} characters`;

export default validations => (values, errorObj) =>
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
