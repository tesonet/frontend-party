import React from 'react';
import './Form.scss';

const Form = ({
  structure,
  values,
  onUpdate,
  onSubmit,
  disabled = false,
  error = false,
  inputClass = '',
}) => {
  const updateField = (e) => {
    onUpdate(structure.name, e.target.name, e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit(structure.name);
    }
  };

  const renderFormField = (field) => {
    const { name, type, placeholder } = field;

    const invalidClass = error ? 'is-invalid' : '';

    switch (type) {
      case 'textfield':
        return <input
          type="text"
          className={`form-control ${inputClass} ${invalidClass}`}
          name={name}
          placeholder={placeholder}
          value={values[name]}
          onChange={updateField}
          disabled={disabled}
        />;
      case 'password':
        return <input
          type="password"
          className={`form-control ${inputClass} ${invalidClass}`}
          name={name}
          placeholder={placeholder}
          value={values[name]}
          onChange={updateField}
          disabled={disabled}
        />;
    }
  };

  return (
    <div className="form" onKeyPress={handleKeyPress}>
      {structure.fields.map((item, key) => (
        <div key={key} className="input-group my-3">
          {item.icon && <span className={`oi oi-${item.icon}`}></span>}
          {renderFormField(item)}
        </div>
      ))}
    </div>
  );
};

export default Form;
