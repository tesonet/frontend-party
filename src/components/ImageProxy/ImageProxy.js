import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ImageProxy = props => (
  <img
    alt={props.alt}
    className={classNames("ImageProxy", props.className)}
    src={props.src}
  />
);

ImageProxy.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default ImageProxy;
