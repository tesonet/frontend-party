// @flow
import styled from 'styled-components';


const Button = styled.button`
    border: none;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    line-height: 36px;
    height: 60px;
    border-radius: 4px;
    color: #fff;
    background: #9fd533;
    cursor: pointer;
    outline: none!important;

    &:hover {
        background: #86b300;
    }
`;

export default Button;
