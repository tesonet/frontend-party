import React from "react";
import PropTypes from "prop-types";

const FormErrors = ({ children }) => {
  switch (typeof children) {
    case "string":
      return (
        <div className="FormErrors">
          <p>{children}</p>
        </div>
      );
    case "object":
      return (
        <ul className="FormErrors">
          {Object.keys(children).map(i => (
            <li key={i}>
              <p>{children[i]}</p>
            </li>
          ))}
        </ul>
      );
    default:
      break;
  }
};

FormErrors.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default FormErrors;
