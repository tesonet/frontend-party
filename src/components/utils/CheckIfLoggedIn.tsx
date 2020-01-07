import React, { useEffect, ReactNode } from 'react';
import useAuth from './useAuth';

type CheckIfLoggedInTypes = {
  children: ReactNode;
};

export default function CheckIfLoggedIn({
  children,
}: CheckIfLoggedInTypes) {
  const { checkIfLogin, authenticated } = useAuth();

  useEffect(() => {
    !authenticated && checkIfLogin();
  }, []);

  return <>{children}</>;
}
