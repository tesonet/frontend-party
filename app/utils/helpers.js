export function generateFormValues(formStructure) {
  let fields = {};

  formStructure.map((item) => {
    fields[item.name] = item.defaultValue;
  });

  return fields;
}
