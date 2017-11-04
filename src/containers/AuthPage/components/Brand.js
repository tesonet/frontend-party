import styled from 'styled-components';
import React from 'react';
import BrandImage from '../images/logo.png';

const Wrapper = styled.img`
  margin-bottom: 70px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Brand = (props) => <Wrapper src={BrandImage} alt="Testio" {...props} />;

export default Brand;
