import styled from 'styled-components'
export const Button = styled.button`
    display:block;
    margin:auto;
    background-color:#9fd533;
    font-weight:700;
    font-size:16px;
    color:white;
    width:100%;
    height:55px;
    border-radius:5px;
    border:none;
    &:focus{
        outline: none;
    }
    &:hover{
        background-color:#86b300;
        cursor:pointer;
    }
`;
