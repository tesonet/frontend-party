import React from 'react';

export default function Input(props) {
  return (
    <div className="form-group with-icon">
      <input
        type={ props.type }
        className={ `form-control ${props.error ? 'is-invalid' : ''}` }
        name={ props.name }
        value={ props.value }
        onChange={ props.onChange }
        placeholder={ props.placeholder }
      />

      <div className="icon">
        { props.icon }
      </div>

      <div className="invalid-feedback">
        { props.error }
      </div>
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  name: '',
  value: '',
  placeholder: '',
  icon: null,
  error: null,
  onChange: () => {}
};
