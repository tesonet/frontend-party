import React from 'react';

import LoginForm from './form';
import formEnhancer from '../enhancers/form';

const EnhancedForm = formEnhancer(LoginForm);

const LoginPage = () => <EnhancedForm />;

export default LoginPage;
