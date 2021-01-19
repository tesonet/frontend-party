import React from "react";
import styled from "styled-components";

import {device_max_width} from "../config/device-breakpoints";


const Button = styled.button`
    width: 360px;
    height: 56px;
    background-color: #9fd533;
    color: white;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.4px;
    cursor: pointer;
    &:hover {
        background: #86b300;
    }
    &:focus {
        outline: none;
    }
    @media only screen and ${device_max_width.mobileL} {
        width: 100%;
        border-radius: 0;       
    }
    `;


export default function LoginButton() {
    return (
        <Button type="submit">
            Login
        </Button>
    );
}
