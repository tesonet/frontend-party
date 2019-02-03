export const updateField = (element, formdata) => {
    const newFormdata = { ...formdata };
    const newElement = { ...newFormdata[element.id] };

    newElement.value = element.e.target.value;

    if (element.blur) {
        let validData = validateField(newElement, formdata);

        newElement.valid = validData[0];
        newElement.errorMessage = validData[1];
    }

    newElement.touched = element.blur;

    newFormdata[element.id] = newElement;

    return newFormdata;
};

export const generateData = formdata => {
    const dataToSubmit = {};

    for (let key in formdata) {
        dataToSubmit[key] = formdata[key].value;
    }

    return dataToSubmit;
};

export const validateField = element => {
    let isValid = [true, ''];

    if (element.validation.required) {
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'Field is required' : ''}`;

        isValid = !valid ? [valid, message] : isValid;
    }

    return isValid;
};

export const isFormValid = formdata => {
    let isValid = true;

    for (let key in formdata) {
        isValid = formdata[key].valid && isValid;
    }

    return isValid;
};
