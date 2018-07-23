import LogoutButton from 'components/Buttons/LogoutContainer';
import List from 'components/ServerList/ListContainer';
import * as React from 'react';

const FormPage: React.SFC<{}> = () => (
  <div>
    Form page
    <LogoutButton />
    <hr />
    <List />
  </div>
);

export default FormPage;
