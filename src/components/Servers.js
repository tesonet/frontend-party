import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { GetData } from '../services/GetData';

class Servers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            data: []
        }
        this.logout = this.logout.bind(this);
    }

    componentWillMount() {

        document.body.className = "body-component-servers";

        let auth_token = localStorage.getItem("token");

        if (auth_token) {
            console.log("Call user feed")

            let URL = 'http://playground.tesonet.lt/v1/servers';
            var parsedData = JSON.parse(auth_token);
            let token = parsedData.token;

            GetData(URL, token).then((result) => {
                let responseJson = result;
                if (responseJson) {
                    // For preventing WARNING:  Each child in an array or iterator should have a unique "key" prop.
                    // Unique key should be added to the response result here.
                    this.setState({ data: responseJson });
                }
                else {
                    console.log('Something went wrong with retrieving list');
                    console.log('Error code' + result);
                }
            });
        }

        else {
            this.setState({ redirect: true });  // Set state to redirect to Login page
        }
    }

    logout() {

        localStorage.setItem("token", '');
        localStorage.clear();
        this.setState({ redirect: true });
    }

    render() {

        if (this.state.redirect) {
            return (<Redirect to={'/login'} />);
        }
        else {
            return (
                <div>

                    <div></div>

                    <div className="row">
                        <div className="col-sm-6"><h3></h3></div>
                        <div className="col-sm-6"><div id="logout"><button type='button' className="logoutButton" onClick={this.logout}><span className="icon">LOGOUT</span></button></div></div>
                    </div>

                    <div className="table-responsive">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>SERVER</td>
                                    <td><div className="text-right">DISTANCE</div></td>
                                </tr>
                                {this.state.data.map((place) => {
                                    return (
                                        <tr>
                                            <td>{place.name}</td>
                                            <td><div className="text-right">{place.distance}</div></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
    }
}

export default Servers;