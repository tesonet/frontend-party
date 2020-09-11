import React from 'react';
import Input from '@/shared/components/Input/Input'
import Button from '@/shared/components/Button/Button'

const LoginForm = () => {
  return (
    <>
      <Input
        placeholder='Username'
        type='text'
        name='username'
        icon='username' />
      <Input
        placeholder='Password'
        type='password'
        name='password'
        icon='password' />
      <Button title='Log In' onClick={() => console.log('click')}></Button>
    </>
  )
}

export default LoginForm;