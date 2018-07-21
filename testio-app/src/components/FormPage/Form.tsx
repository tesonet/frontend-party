import * as React from 'react';
import LogoutButton from '../Buttons/LogoutContainer';
import List from '../ServerList/ListContainer';

const FormPage: React.SFC<{}> = () => (
  <div>
    Form page
    <LogoutButton />
    <hr />
    <List />
  </div>
);

export default FormPage;
