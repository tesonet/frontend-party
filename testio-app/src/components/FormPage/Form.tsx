import List from 'components/ServerList/ListContainer';
import * as React from 'react';
import Header from './Header';

const FormPage: React.SFC<{}> = () => (
  <div>
    <Header />
    <List />
  </div>
);

export default FormPage;
