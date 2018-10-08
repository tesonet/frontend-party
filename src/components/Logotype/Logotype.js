import React from 'react';

function Logotype(props) {
  return <img
    alt={props.alt}
    className="img-fluid"
    id={props.id}
    src={props.src}
  />;
}

export default Logotype;
