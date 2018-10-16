import React, {Component} from 'react';
import './assets/style/ServersList.scss';
import axios from 'axios';

class ServersList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      server_error: false,
      request_finished: false
    };
  }

  componentDidMount() {
      /*Taken saved token from localstorage*/
      const token = localStorage.getItem("testio_token");

      /*Ajax request to get servers data from server. Passing token into header*/
      axios.get('http://playground.tesonet.lt/v1/servers', {
        headers: {
          "Authorization": token
        }
      }).then((res) =>{
        this.setState({
          server_error: false,
          data: this.sortBy(res.data, "name"), /*Passing data sorted by name*/
          request_finished: true});
      }).catch((error) => {
        console.log(error);
        this.setState({server_error: true, error_message: "Server error"});
      })
  }

  /*
    Sorting array by passed arguments
    Passing array of objects and sorting argument.
  .*/
  sortBy = (arr, prop) => {
    return arr.sort((a,b) => (a[prop] > b[prop]) ? 1 : ((b[prop] > a[prop]) ? -1 : 0));
  }

  /*On click sorting servers by name*/
  sortingOnServerClick = () => {
    this.setState({data: this.sortBy(this.state.data, "name")});
  }

  /*On click sorting servers by distance*/
  sortingOnDistanceClick = () => {
    this.setState({data: this.sortBy(this.state.data, "distance")});
  }

  /*
  Checking receved data or error in server_error.
    3 cases:
          1.If get server error;
          2. If server server status is OK but where is no data;
          3. If server status is Ok and have some data to show;
  These function return is in the render method.
  */
  renderServerstable() {
    if (this.state.server_error === true) {
      return (<p>Server error</p>)
    } else if (this.state.request_finished === true && this.state.data.length === 0) {
      return (<p>No data</p>)
    } else {
      return (<div>
        {
          this.state.data.map((data, i) => (<div className="servers-row" key={i}>
            <p>{data.name}</p>
            <p>{data.distance}</p>
          </div>))
        }
      </div>)
    }
  }

  render() {
    return (<div>
      <div className="servers-header">
        <p onClick={this.sortingOnServerClick}>SERVER</p>
        <p onClick={this.sortingOnDistanceClick}>DISTANCE</p>
      </div>
      <div className="servers-container">
        {this.renderServerstable()}
      </div>

    </div>);
  }
}

export default ServersList
