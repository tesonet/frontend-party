const required = (value = '') => {
    if (!value && value.length === 0) {
        return 'This field is required';
    }

    return undefined;
};

export default {
    required,
};
