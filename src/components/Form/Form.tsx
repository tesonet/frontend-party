import React from 'react';

import Button from '../Button';
import Input from '../Input';

const Form: React.FC = () => {
  return (
    <form action="submit" className={'w-full max-w-sm'}>
      <Input icon={'user'} placeholder={'Username'} type={'text'} />
      <Input icon={'lock'} placeholder={'Password'} type={'password'} />
      <Button text="Log In" />
    </form>
  );
};

export default Form;
