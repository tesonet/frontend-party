import React from "react";
import styled from "styled-components";

import humanIcon from "../assets/human-icon.svg";
import lockIcon from "../assets/lock-icon.svg";
import {device_max_width} from "../config/device-breakpoints";


const Input = styled.input`
    width: 360px;
    height: 56px;
    background-color: white;
    color: #999;
    background-image: url(${props => props.icon});
    padding-left: 60px;
    background-repeat: no-repeat;
    background-position-x: 25px;
    background-position-y: 17px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin-bottom: 20px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        letter-spacing: 0.4px;
        color: #b3b3b3;
    }
    @media only screen and ${device_max_width.mobileL} {
        width: 100%;
        border-radius: 0;
    }
    `;

const HiddenLabel = styled.label`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  `;

export default function LoginInput(props) {
    return (
        <>
            <HiddenLabel>{props.label}</HiddenLabel>
            <Input
                icon={props.label === 'Password' ? lockIcon : humanIcon}
                type={props.label === 'Password' ? 'password' : 'text'}
                value={props.value}
                placeholder={props.label}
                onChange={e => props.onChange(e.target.value)}
                required
            />
        </>
    );
}
