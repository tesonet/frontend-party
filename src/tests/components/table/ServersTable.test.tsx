import * as React from 'react';
import LoginForm from '../../../components/form/LoginForm';
import ServersTable from '../../../components/table/ServersTable';
import { shallow } from 'enzyme';
import { IServersTableState } from '../../../interfaces';
import logout from '../../../utils/logout';
import history from '../../../utils/history';
import '../../../utils/mocalStorage';

const login = async () => {
  const wrapper = shallow(<LoginForm/>);

  wrapper.instance().setState({
    username: 'tesonet',
    password: 'partyanimal'
  });

  const event: Event = new Event('submit', { cancelable: true });

  await (wrapper.instance() as any).handleSubmit(event);
};


describe('ServersTable component', () => {
  it('Gets items from server when logged in', async () => {
    await login();
    const wrapper = shallow(<ServersTable/>);
    await (wrapper.instance() as any).componentDidMount();
    expect(!!localStorage.getItem('apitoken') && (wrapper.instance().state as IServersTableState).servers.length > 0).toBeTruthy();
    logout();
  });


  it('Redirects to Login view when not logged in', async () => {
    const wrapper = shallow(<ServersTable/>);

    expect(!localStorage.getItem('apitoken') && history.location.pathname === '/login').toBeTruthy();
  });
});
