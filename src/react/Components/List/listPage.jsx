import React from "react";
import axios from "axios";
import LogoutButton from "../Logout/";
import Loader from "react-loader-spinner";
import Table from "rc-table";
import "rc-table/assets/index.css";
import {api} from "../../../../apis.cfg";
import Logo from "../../../express/public/static/img/servers/servers-logo.png";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servers: [],
            loading: true
        };
        this.getServersList();
    }

    getServersList() {
        axios.get(api.servers, {
            headers: {
                "Content-type": "application/json",
                "Authorization": this.props.token.loginReducer.token
            }
        })
            .then((response) => {
                response.data.sort(function (a, b) {
                    if (a.distance === b.distance) {
                        return a.name > b.name ? 1 : -1
                    } else {
                        return a.distance > b.distance ? 1 : -1
                    }
                });
                if (response.data) {
                    this.setState({
                        servers: response.data,
                        loading: false
                    });
                }
            }).catch((error) => {
            console.log(error);
            this.setState({
                loading: false
            });
        });
    }

    render() {
        let data;
        const columns = [
            { title: <div className="table-title">SERVER</div>, dataIndex: 'name'},
            { title: <div className="table-title pull-right">DISTANCE</div>, dataIndex: 'distance',
                render: (value, row) => {
                    return <div className="pull-right">{row.distance} km</div>
                }
            }
        ];
        if(this.state.loading){
            data = <div style={{marginTop: '5%'}}>
                <Loader
                    type="Oval"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </div>
        } else {
            data = <Table columns={columns} data={this.state.servers} rowKey={(row) => {return row.name + row.distance}} />
        }
        return (
            <div className="container-fluid  server-list-wrapper">
                <div className="row">
                    <div className="pull-left">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <div className="pull-right">
                        <LogoutButton/>
                    </div>
                </div>
                <div className="row text-center"> <br/>
                    { data }
                </div>
            </div>
        )
    }
}