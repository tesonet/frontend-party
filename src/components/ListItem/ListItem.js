import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 58px;
    border-top: 1px solid #e6e6e6;
    padding: 0 15px;
`;

const Text = styled.div`
    font-family: Roboto;
    font-size: 14px;
    color: #999;
`;

const ListItem = ({ name, distance }) => {
    return (
        <Item>
            <Text>{name}</Text>
            <Text>{distance}</Text>
        </Item>
    );
};
export default ListItem;

ListItem.propTypes = {
    name: PropTypes.string,
    distance: PropTypes.number
};
