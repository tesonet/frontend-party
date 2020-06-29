import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SiteLogo from "../../images/logotype-testio.png";
import IconButton from "../IconButton/IconButton";

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 42px 15px;
`;

const Logo = styled.img`
    width: 115px;
    height: 30px;
`;

const HomePageHeader = ({ handleLogout }) => {
    return (
        <Header>
            <Logo src={SiteLogo} alt="testio" />
            <IconButton
                clickHandler={handleLogout}
                icon="icon"
                label="Logout"
            />
        </Header>
    );
};

export default HomePageHeader;

HomePageHeader.propTypes = {
    children: PropTypes.element.isRequired,
    handleLogout: PropTypes.func
};
