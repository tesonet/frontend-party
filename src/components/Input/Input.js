import React from 'react';

function Input(props) {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <img
            alt={props.iconAlt}
            className="img-fluid"
            id={props.iconId}
            src={props.iconSrc}
          />
        </span>
      </div>
      <input
        className="form-control"
        id={props.inputId}
        placeholder={props.inputPlaceholder}
        type={props.inputType}
      />
    </div>
  );
}

export default Input;
