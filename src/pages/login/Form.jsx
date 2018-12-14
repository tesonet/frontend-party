import React from "react";
import PropTypes from "prop-types";
import { Form, Col } from "reactstrap";

class StyledForm extends React.Component {
  render() {
    const { onSubmit, children } = this.props;
    return (
      <Form check row onSubmit={onSubmit}>
        {children}
      </Form>
    );
  }
}

export default StyledForm;
