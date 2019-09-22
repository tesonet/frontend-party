import React from 'react';
import routeStore from '../../routing/store';
import authStore from '../authentication/store';
import Button from '../../common/form/button/button';
import { observer, Provider } from 'mobx-react';
import serverListStore from './store';

const ServerPage = observer(class ServerList extends React.Component {
    public componentDidMount() {
        console.log(authStore.isLoggedIn);
        if(!authStore.isLoggedIn) {
            routeStore.changeRouteToDefault()
        }
    }

    public render() {
        return (
            <Provider serverListStore={serverListStore}>
                <ServerList/>
                <Button onClick={this.handleLogout}>logOut</Button>
            </Provider>
        )
    }

    private handleLogout = () => {
        authStore.logOutUser();
    }
});

export default ServerPage;
