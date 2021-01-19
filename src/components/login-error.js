import React from "react";
import styled from "styled-components";


const Error = styled.div`
    margin-bottom: 20px;
    color: #9fd533;
    `;


export default function LoginError(props) {
    if (props.error) {
        return <Error>{props.error}</Error>
    } else {
        return <div/>
    }

}
