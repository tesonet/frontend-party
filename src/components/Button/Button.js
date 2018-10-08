import React from 'react';

function Button(props) {
  return (
    <button className="btn" id={props.buttonId}>
      {icon(props)}
      {props.buttonText}
    </button>
  );
}

function icon(props) {
  if (props.iconAlt && props.iconId && props.iconSrc) {
    return (
      <img
        alt={props.iconAlt}
        className="img-fluid"
        id={props.iconId}
        src={props.iconSrc}
      />
    );
  }
}

export default Button;
