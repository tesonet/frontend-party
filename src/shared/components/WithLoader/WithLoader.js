import React from 'react';
import Loader from 'react-loader-spinner';
import COLORS from '@/shared/constants/colors';
import { StyledLoaderContainer } from './WithLoader.styles';

const WithLoader = (Component) => {
  const renderLoader = ({ isLoading, ...props }) => {
    if (!isLoading) return <Component {...props} />;
    return (
      <StyledLoaderContainer data-testid="loader">
        <Loader type="Oval" color={COLORS.COMMON.LIGHT_GREEN} height={40} width={40} />
      </StyledLoaderContainer>
    );
  };
  return renderLoader;
};

export default WithLoader;
