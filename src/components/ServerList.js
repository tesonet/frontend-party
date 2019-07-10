import React, { Component } from "react";
import { connect } from "react-redux";
import { getServerList } from "../store/actions/actions";
import Header from "./Header";
import styled from "styled-components";
import Table from "./styles/TableStyles";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  height:100vh;
  width: 100%;
`;

class ServerList extends Component {
  componentDidMount() {
    this.props.onGetServerList();
  }

  sortData = () => {
    this.props.list.sort((a, b) => {
      if (a.distance > b.distance) return -1;
      if (a.distance < b.distance) return 1;

      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;

      return 0;
    });
  };

  render() {
    this.sortData();

    return (
      <Wrapper>
        <Header />
        <Table>
          <thead>
            <tr>
              <th>Server</th>
              <th>Distance</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((item, index) => (
              <tr className="table-row__item" key={index}>
                <td className="table-row__item-name">{item.name}</td>
                <td className="table-row__item-distance">{item.distance} km</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetServerList: () => dispatch(getServerList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerList);
