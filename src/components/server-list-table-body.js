import React from "react";
import styled from "styled-components";


const Item = styled.div`
    width: 100%;
    height: 60px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
`;

const ItemDiv = styled.div`
    color: #666666;
    font-size: 16px;
    font-weight: 300;
    font-style: normal;
    letter-spacing: 0.4px;
    line-height: 30px;
    text-align: right;
`;

const Scrollable = styled.div`
    overflow-y: auto;
    height: calc(100vh - 173px);
`;

export default function ServerListTableBody(props) {

    const createList = () => {
        return props.server_list.map((item, index) => {
            return (
                <Item key={index}>
                    <ItemDiv>{item.name}</ItemDiv>
                    <ItemDiv>{item.distance}</ItemDiv>
                </Item>
            )
        })
    };

    return (
        <Scrollable>
            {createList()}
        </Scrollable>
    );
};

