import React from "react";
import PropTypes from "prop-types";
import { Form, Col } from "reactstrap";

class StyledForm extends React.Component {
  render() {
    const { submit, children } = this.props;
    return <Form onSubmit={submit}>{children}</Form>;
  }
}

export default StyledForm;
