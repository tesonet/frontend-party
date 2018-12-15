import React from "react";
import PropTypes from "prop-types";

import ListItem from "./ListItem";

const CountryList = ({ countries }) =>
  countries.map(({ name, distance }) => (
    <ListItem
      key={name + distance}
      name={name}
      value={<span>{distance} km</span>}
    />
  ));

CountryList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      distance: PropTypes.number.isRequired,
    })
  ),
};

export default CountryList;
