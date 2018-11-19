import styled from 'styled-components'
export const Input = styled.input`
    position:relative;
    display:block;
    margin:auto;
    width:100%;
    font-weight:400;
    font-size:16px;
    height:56px;
    margin-bottom:20px;
    border-radius:5px;
    border:none;
    background-image:url(${props=>props.icon});
    background-repeat: no-repeat;
    background-position: 27px;
    padding-left:52px;
    color:#b2b2b2;
    &:focus{
        outline: none;
        color:#999;
        
    }
 
`;
