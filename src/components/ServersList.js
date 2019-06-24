import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';
import SVG from 'react-inlinesvg';
import testioLogo from '../images/testio-logo.png';
import logout from '../images/logout.svg';
import { setAuthToken } from '../actions/init';

class ServersList extends Component {
  constructor(props) {
    super(props);

    this._distanceSort = '';
    this._distanceSortClassName = '';
    this._serverSort = '';
    this._serverSortClassName = '';

    this.state = {
      failedToLoad: false,
      services: ''
    };

    this.sortByDistance = this.sortByDistance.bind(this);
    this.sortByServerName = this.sortByServerName.bind(this);
    this.logout = this.logout.bind(this);

  }

  componentDidMount() {
    let token = this.props.authToken;

    axios({
      method: 'GET',
      url: 'http://playground.tesonet.lt/v1/servers',
      headers: {
        'Authorization': token
      }
    })
      .then(res => {
        let services = _.get(res, ['data']);
        this.setState({ services });
      })
      .catch(err => {
        console.error(err);
        this.setState({ failedToLoad: true });
      });
  };

  sortByDistance() {
    let sortTypes = ['asc', 'desc'];

    if (!this._distanceSort) {
      this._distanceSort = 0;
    }

    this._distanceSort = Number(!this._distanceSort);
    let sortBy = sortTypes[this._distanceSort];
    this._distanceSortClassName = sortBy;
    this._serverSortClassName = '';
    let orderElements = _.orderBy(this.state.services, ['distance'], [sortBy]);
    this.setState({ services: orderElements });

  }

  logout() {
    this.props.setAuthToken('');
    localStorage.removeItem('authToken');
    this.props.history.push('/login');
  }

  sortByServerName() {

    let sortTypes = ['asc', 'desc'];

    if (!this._serverSort) {
      this._serverSort = 0;
    }

    this._serverSort = Number(!this._serverSort);
    let sortBy = sortTypes[this._serverSort];
    this._serverSortClassName = sortBy;
    this._distanceSortClassName = '';
    let orderElements = _.orderBy(this.state.services, ['name'], [sortBy]);
    this.setState({ services: orderElements });
  }

  render() {
    return (
      <div id={'server-list'}>

        <div className={'server-list-header'}>
          <img src={testioLogo} alt='Logo' className={'testio-logo'}/>
          <div className={'logout-button'} onClick={this.logout}>
            <SVG
              src={logout}
              className={'logout-icon'}
              cacheGetRequests={true}
              onError={err => console.error(`Error loading nav icons. Reason: ${_.get(err, 'xhr.statusText')}`)}
            />
            <span className={'logout-text'}>Logout</span>
          </div>
        </div>

        {!this.state.services.length && !this.state.failedToLoad && <span className={'spinner'}/>}
        {this.state.failedToLoad &&
        <span className={'server-list-load-fail'}>Failed to load. Please, try again later.</span>}

        {this.state.services.length > 0 && <div className={'server-list-table'}>
          <div className={'table-header table-row'}>

            <div className={'header-left'}>

              <span
                className={'table-header-title'}
                onClick={this.sortByServerName}
              >Server</span>
              <span className={`header-right-sorting-icon ${this._serverSortClassName}`}/>

            </div>

            <div className={'header-right'}>
              <span className={`header-right-sorting-icon ${this._distanceSortClassName}`}/>
              <span
                className={'table-header-title'}
                onClick={this.sortByDistance}
              >Distance</span>
            </div>

          </div>

          {this.state.services.map((item, idx) => {
            return (
              <div className={'table-row'} key={idx + item.name}>
                <span className={'table-row-name'}>{item.name}</span>
                <span className={'table-row-distance'}>{`${item.distance} km`}</span>
              </div>
            )
          })}

        </div>}
      </div>
    );
  }
}

const mapStateToProps = ({ authToken }) => {
  return { authToken };
};

const mapDispatchToProps = (dispatch) => {

  return {
    setAuthToken: (authToken) => {
      dispatch(setAuthToken(authToken));
    }
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(ServersList);
