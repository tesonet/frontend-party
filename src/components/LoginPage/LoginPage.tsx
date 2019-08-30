import React from 'react';

import Form from '../Form';
import Branding from '../Branding';

const LoginPage: React.FC = () => {
  return (
    <div className="background-img h-screen flex justify-center items-center">
      <div>
        <Branding textColor={'text-white'} />
        <Form />
      </div>
    </div>
  );
};

export default LoginPage;
