import * as React from 'react';

const SignUp: React.SFC = () => (
  <div
    style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      backgroundColor: '#0b0f27'
    }}
  >
    <form>
      <input type="text" />
      <input type="text" />
      <button type="submit" />
    </form>
  </div>
);

export default SignUp;
