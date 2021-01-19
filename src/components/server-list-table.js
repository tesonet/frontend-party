import React, {useEffect} from "react";
import {connect} from "react-redux";
import styled from "styled-components";

import {fetchServerList} from "../api/server-list";
import {setServerList} from "../redux/actions";
import ServerListTableBody from "./server-list-table-body";


const Header = styled.div`
    width: 100%;
    height: 60px;
    background-color: #f5f5f5;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
`;

const HeaderDiv = styled.div`
    color: #999999;
    font-size: 14px;
    font-weight: 300;
    font-style: normal;
    letter-spacing: 1.4px;
    line-height: 30px;
    text-align: left;
`;

export const ServerListTable = (props) => {

    useEffect(() => {
        if (!props.server_list.length) {
            fetchServerList(localStorage.getItem('token'))
                .then(json => props.setServerList(json.sort(sortByDistanceAndNameAsc)));
        }
    });

    return (
        <>
            <Header>
                <HeaderDiv>SERVER</HeaderDiv>
                <HeaderDiv>DISTANCE</HeaderDiv>
            </Header>
            <ServerListTableBody server_list={props.server_list}/>
        </>
    );
};

export default connect(
    state => state.serverList,
    {setServerList}
)(ServerListTable);


const sortByDistanceAndNameAsc = (item1, item2) => {
    if (item1.distance > item2.distance) return 1;
    if (item1.distance < item2.distance) return -1;

    if (item1.name > item2.name) return 1;
    if (item1.name < item2.name) return -1;
};
