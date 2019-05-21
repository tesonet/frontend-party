
import React, { useEffect, useState } from 'react';
import GetServers from '../../services/ServersService';
import Table from '../../components/Table/Table';
import logo from '../../assets/images/logo-dark.png'
import logout from '../../assets/icons/ico-logout.png'
import './List.scss';

const List = ({ history }) => {
    const token = localStorage.getItem('token');
    const [servers, setServers] = useState([]);

    const logOut = () => {
        localStorage.removeItem('token');
        history.push('/login');
    }

    useEffect(() => {
        GetServers(token).then(results => {
            setServers(results);
        })
    }, [token]);

    return (
        <div>
            <div className="list-header">
                <img alt="Logo" src={logo} className="list-logo" />
                <button type="button" onClick={logOut} className="list-logout">
                    <img alt="Logout" className="list-logout-icon" src={logout} />
                    Logout
                </button>
            </div>
            <Table servers={servers}></Table>
        </div>
    )
}

export default List;