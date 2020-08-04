import * as React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10rem;
  height: 10rem;
`;

const CircularProgressStyled = styled(CircularProgress)`
  && {
    width: 100% !important;
    height: 100% !important;
  }
`;

export const Loader = () => (
  <LoaderWrapper>
    <CircularProgressStyled />
  </LoaderWrapper>
);
