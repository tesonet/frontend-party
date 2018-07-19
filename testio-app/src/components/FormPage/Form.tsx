import * as React from 'react';
import LogoutButton from '../Buttons/LogoutContainer';
import List from '../ServerList/ListContainer';

const FormPage: React.SFC<{}> = () => (
  <p>
    Form page
    <LogoutButton />
    <hr />
    <List />
  </p>
);

export default FormPage;
