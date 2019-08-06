import React, { Component } from 'react';
import BEM from './BEM';
import SmartTable from './SmartTable';
import Alert from './Alert';

import { Redirect } from 'react-router-dom';

import '../server-list.css'; // webpack does not handle scss files! use OS tools

const TESONET_API_SERVERS =  'http://playground.tesonet.lt/v1/servers';

class ServerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            servers: [],
            redirect: false,
            loading: true
        }

        this.logout = this.logout.bind(this);  
        this.serverSortOnClick = this.serverSortOnClick.bind(this);   
        this.filterName = this.filterName.bind(this);
    }

    componentDidMount(){
        this.setState({loading: true});

        this.getServers()
        .then((servers)=> {
            this.setState({servers: this.serverSort(servers, 'name', 'asc'), loading: false})
        })
        .catch((message) => {
            alert("There was a problem with your sesssion. Login and try again.");

            localStorage.removeItem('token');
            this.setState({redirect: '/login'});
        });
    }

    logout() {
        localStorage.removeItem('token');
        this.setState({redirect: '/login'});
    }

    getServers() {
        return new Promise((resolve, reject) => {
        
            var xhr = new XMLHttpRequest();
        
            var token =  localStorage.getItem("token");
    
            xhr.onload = () => {
                let r = JSON.parse(xhr.response)
                
                if (xhr.status == 200) {
                    console.log(r)
                    resolve(r);
                } else {
                    reject(r.message)
                }
            };
    
            xhr.open("GET", TESONET_API_SERVERS, true)
    
            xhr.setRequestHeader("Authorization", "Bearer "+token);
            xhr.setRequestHeader("Content-Type", "application/json");
    
            xhr.send();
        })
    }

    getCols() {
        //this.setState({showAlert: true, alertMessage: r.message })

        if (this.state.servers) {
            var cols = [
                {
                    key: 'name',
                    title: 'Server',
                    sort: true
                },
                {
                    key: 'distance',
                    title: 'Distance',
                    postfix: 'km',
                    sort: true
                }
            ]
        } else {
            var cols = [];
        }


        return cols;
    }

    getRows() {
        return this.state.servers
    }

    serverSort(servers, sort_column, sort_direction) {
        if (sort_column == 'name') {
            if (sort_direction == 'asc') {
                var serversSorted = servers.sort((sa, sb)=> sa.name.charCodeAt(0) - sb.name.charCodeAt(0))
            } else {
                var serversSorted = servers.sort((sa, sb)=> sb.name.charCodeAt(0) - sa.name.charCodeAt(0))
            }
        } 

        if (sort_column == 'distance') {
            if (sort_direction == 'asc') {
                var serversSorted = servers.sort((sa, sb)=>sb.distance-sa.distance)
            } else {
                var serversSorted = servers.sort((sa, sb)=>sa.distance-sb.distance)
            }
        } 

        return servers;
    }

    serverSortOnClick(e) {
        // @TODO: make this more dynamic
        var attr = e.target.attributes
        
        if (e.target.hasAttributes()) {
            var sort = e.target.getAttribute('data-sort');
            var sort_direction = e.target.getAttribute('data-sort-direction');

            this.setState({ servers: this.serverSort(this.state.servers, sort, sort_direction) })

            if (sort_direction == 'asc') {
                e.target.setAttribute('data-sort-direction', 'desc')
            } else {
                e.target.setAttribute('data-sort-direction', 'asc')
            }
        }

    }
    
    filterName(e) {
        var s = e.currentTarget.value;

        if (!this.state.servers_copy) this.state.servers_copy = this.state.servers;
        
        var serversFiltered = this.state.servers_copy.filter((server)=>server.name.indexOf(s) > -1)
        this.setState({ servers: serversFiltered});
    }

    render() {
        const redirect  = this.state.redirect;

        if (redirect) {
            return <Redirect to={redirect} />;
        }

        return (
            <BEM name="server-list-page">
                <div className="nav-bar">
                    <div className="nav-bar__left">
                        <img src="assets/images/logo-server-list.png" />
                    </div>

                    <div className="nav-bar__right">
                        <button onClick={this.logout} className="btn btn--logout">
                            Logout
                        </button>
                    </div>
                </div>

                {this.state.loading ? <Alert type="neutral" message="Loading... Please wait." /> : ''}

                {!this.state.loading ? <div><input placeholder="Filter results..." type="text" name="filter" onChange={this.filterName} /></div> : '' }

                <SmartTable sort={this.serverSortOnClick} rows={this.getRows()} cols={this.getCols()} />         
            </BEM>
        )
    }
}

export default ServerList;