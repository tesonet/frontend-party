import styled from 'styled-components'
import ICOLogOut from '../assets/img/ico-logout.svg'
export const LogOut = styled.button`
    position:relative;
    font-weight:400;
    font-size:14px;
    color:#2f3254;
    background-color:transparent;
    width:90px;
    height:30px;
    border:none;
    padding:0.5em 0.5em 0.5em 35px;
    background-image:url(${ICOLogOut});
    background-repeat: no-repeat;
    background-position: 12px;
    &:focus{
        outline: none;
    }
    &:hover{
        background-color:#99cc33;
        color:white;
        cursor:pointer;
    }
`;
