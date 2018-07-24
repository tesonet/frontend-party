import ErrorMessage from 'components/ErrorMessages/ServerListErrorContainer';
import Loader from 'components/Loader/ServerListLoaderContainer';
import List from 'components/ServerList/ListContainer';
import * as React from 'react';
import Header from './Header';

const FormPage: React.SFC<{}> = () => (
  <div className="vh-100">
    <Header />
    <Loader />
    <ErrorMessage />
    <List />
  </div>
);

export default FormPage;
