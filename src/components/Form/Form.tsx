import React from 'react';

import Button from '../Button';
import Input from '../Input';
import userIcon from '../../assets/icons/user.svg';

const Form: React.FC = () => {
  return (
    <form action="submit" className={'w-full max-w-sm'}>
      <Input icon={userIcon} placeholder={'Username'} type={'text'} />
      <Input icon={'lock'} placeholder={'Password'} type={'password'} />
      <Button text="Log In" />
    </form>
  );
};

export default Form;
