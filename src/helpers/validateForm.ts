type FormItemType = {
  name: string;
  value: any;
  validationOptions: string[];
};
export default (formData: any[]) => {
  return formData
    .map((formItem: FormItemType) => {
      const { name, value, validationOptions = [] } = formItem;
      const errors = validationOptions
        .map(validationOption =>
          checkValidation(value, validationOption),
        )
        .filter(error => error);

      return (
        errors.length > 0 && {
          name,
          errors,
        }
      );
    })
    .reduce(
      (prev, curr) => ({
        ...prev,
        ...(curr.name &&
          curr.errors && {
            [curr.name]: curr.errors,
          }),
      }),
      {},
    );
};

function checkValidation(value: any, validationOption: string) {
  switch (validationOption) {
    case 'required':
      return required(value);
    default:
      return false;
  }
}
function required(value: any) {
  if (value === undefined || value === null || value === '') {
    return 'Field is required';
  }
}
