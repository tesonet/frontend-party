import React from "react";
import PropTypes from "prop-types";

import { Container, Title } from "./ListItem.styles";

const ListItem = ({ name, type, value }) => (
  <Container type={type}>
    <Title>{name}</Title>
    <Title>{value}</Title>
  </Container>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};
ListItem.defaultProps = {
  type: null,
};

export default ListItem;
