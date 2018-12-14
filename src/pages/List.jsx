import React, { Fragment } from "react";

import { getTasks } from "../api/api";
import { distanceAndNameSort } from "../helpers/sorter";

import ListItem from "./list/ListItem";
import Navigation from "./list/Navigation";
import CountryList from "./list/CountryList";

class List extends React.Component {
  state = {
    countries: [],
    error: null
  };

  async componentDidMount() {
    try {
      const countries = await getTasks();
      this.setState({
        countries: distanceAndNameSort(countries)
      });
    } catch (err) {
      this.setState({ error: err.msg });
    }
  }

  render() {
    const { logout } = this.props;
    const { countries, error } = this.state;

    return (
      <Fragment>
        <Navigation onClick={logout} />
        <ListItem type="header" name="Server" value="Distance" />

        {error && error.msg}
        <CountryList countries={countries} />
      </Fragment>
    );
  }
}

export default List;
