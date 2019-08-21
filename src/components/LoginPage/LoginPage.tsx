import React from 'react';

import Form from '../Form';

const LoginPage: React.FC = () => {
  return (
    <div className="background-img h-screen flex justify-center items-center">
      <div>
        <div className={'text-6xl font-extrabold'}>
          testio<span className={'text-brand-main'}>.</span>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default LoginPage;
