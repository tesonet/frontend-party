import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;    
`

const Navigation = styled.div`
    padding: 40px 15px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    image {
        height: 30px;
    }
    button {
        line-height: 28px;
        color: rgb(47, 50, 84);
        font-size: 14px;
        font-weight: 300;
        height: 30px;
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        cursor: pointer;
        outline: 0;
        svg {
            margin-right: 10px;
        }
        &:hover {
            background-color: #99cc33;
        }
    }
`

const Table = styled.div`
    box-sizing: border-box;
    width: 100%;
    div {
        padding: 15px;
        border-top: 1px solid rgb(230, 230, 230);
        display: flex;
        justify-content: space-between;
    }
    div:first-child {
        background-color: rgb(245, 245, 245);
        padding: 19px 15px 11px;
        text-transform: uppercase;
        letter-spacing: 1.4px;
    }
    span {
        color: rgb(102, 102, 102);
        font-size: 16px;
        line-height: 30px;
        font-weight: 300;
    }
`

const Loading = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        font-size: 24px;
        color: #99cc33;
    }
`

export { Wrapper, Navigation, Table, Loading }