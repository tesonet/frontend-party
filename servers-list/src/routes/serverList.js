import React from 'react';
import axios from 'axios';
import store from '../store/index';
import { dataObject } from '../store/actions';
import { connect } from 'react-redux';

class ServerList extends React.Component {

    componentDidMount() {
        this.getServersList();
    }

    // Fetch data from server
    getServersList = () => {
        axios({
            method: 'get',
            url: 'http://playground.tesonet.lt/v1/servers',
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }).then(response => {
            store.dispatch(dataObject(response.data)); 
        })
        .catch((error) => {
            console.log(error)
        });
    }

    // Logut button function
    handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('logged');
        this.props.history.push('/');
    }

    render(){
        const servers = this.props.data;
        return(
            <div>
                <div className={'header'}>
                    <img className={'header__logo'} src={require('../media/logo-testio-dark.svg')} alt='logo' />
                    <div className={'header__logout'} onClick={this.handleLogout}>
                        <img src={require('../media/logout-icon.svg')} alt='logout' />
                        <span>logout</span>
                    </div>
                </div>
                <div className={'block-header'}>
                    <span>server</span>
                    <span>distance</span>
                </div>
                {servers.map((server, i) => 
                    <div key={i} className={'data-list'}>
                        <span>{server.name}</span>
                        <span>{server.distance}</span>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {data: state.servers.data}
}

export default connect(mapStateToProps)(ServerList);