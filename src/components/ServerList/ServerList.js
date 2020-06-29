import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ListItem from "../ListItem/ListItem";

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  background-color: #f5f5f5;
  border-top: 1px solid #e6e6e6;
  padding: 0 15px;
`;

const HeaderText = styled.div`
  font-family: Roboto;
  font-size: 14px;
  color: #999;
`;

const ServerList = ({ data }) => {
  return (
    <div>
      <ListHeader>
        <HeaderText>Server</HeaderText>
        <HeaderText>Distance</HeaderText>
      </ListHeader>
      {data.map((server, i) => (
        <ListItem key={i} name={server.name} distance={server.distance} />
      ))}
    </div>
  );
};

export default ServerList;

ServerList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};
