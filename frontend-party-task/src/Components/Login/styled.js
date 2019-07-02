import styled from 'styled-components'
import bgImg from '../../Assets/LoginBgImg.png'
import IconUsername from '../../Assets/IconUsername.svg'
import IconPassword from '../../Assets/IconPassword.svg'

const BgImg = styled.div`
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    opacity: 0.2;
    z-index: -1;
    background-image: url(${bgImg});
    background-position: center right;
    background-size: cover;
`
const LoginWrap = styled.div`
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    z-index: 1;
    &::before {
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%; 
        height: 100%;  
        z-index: -1;
        background-color: #0B0F27;
    } 
    p {
        margin: 0;
    }
    img {
        margin-bottom: 69px;
    }
    div:first-child {
        width: 25%;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    @media only screen and (max-width: 1000px) {
        div:first-child {
            width: 50%;
        }
    }
    @media only screen and (max-width: 400px) {
        div:first-child {
            width: 80%;
        } 
    }
`

const Input = styled.input`
    padding: 17px 10px 11px 55px;
    background-color: #fff;
    color: rgb(179, 179, 179);
    border-radius: 4px;
    outline: none;
    border: none;
    margin-bottom: 18px;
    width: 100%;
    font-size: 16px;
    line-height: 30px;
    box-sizing: border-box;
    background-image: url(${(props) => props.placeholder === 'Username' ? IconUsername : IconPassword});
    background-repeat: no-repeat;
    background-position: 25px center;
    &:focus {
        color: #999;
    }
    &::placeholder {
        color: rgb(179, 179, 179);
    }
    @media only screen and (max-width: 1000px) {
        background-position: 10px center;
        padding: 17px 10px 11px 40px;
    }
`

const Button = styled.button`
    background-color: rgb(159, 213, 51);
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    line-height: 30px;
    width: 100%;
    border: none;
    color: #fff;
    padding: 17px 0 11px;
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: #86b300;
    }
`

const Validator = styled.p`
    font-size: 20px;
    color: #ed2939;
    font-weight: bold;
    position: absolute;
    top: ${props => props.username ? '150px' : '215px'}
    left: 105%;
    width: 100%;
    @media only screen and (max-width: 1000px) {
        top: ${props => props.username ? '191px' : '269px'}
        left: 0;
        font-size: 12px;
        right: 0;
    }
`

export { LoginWrap, Input, Button, BgImg, Validator }