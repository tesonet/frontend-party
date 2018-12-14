import React from "react";
import { getTasks } from "../api/api";

import ListItem from "./list/ListItem";
import Navigation from "./list/Navigation";

class List extends React.Component {
  state = {
    countries: []
  };

  async componentDidMount() {
    const countries = await getTasks();
    this.setState({
      countries: countries.sort(function(a, b) {
        return a.name.localeCompare(b.name) || a.distance - b.distance;
      })
    });
  }

  render() {
    const { countries } = this.state;

    return (
      <div>
        <Navigation onClick={() => console.log("logout")} />
        <ListItem type="header" name="Server" value="Distance" />
        {countries.map(({ name, distance }) => (
          <ListItem name={name} value={distance} />
        ))}
      </div>
    );
  }
}

export default List;
