import React from 'react';

const LoadingPlaceholder: React.FC = ({ children }) => {
  return <div className="bg-secondary text-white p-4 border d-flex justify-content-center">{children}</div>;
};

export default LoadingPlaceholder;
