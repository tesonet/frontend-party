import React, { Component } from 'react'
import {connect} from 'react-redux'

import * as Actions from '../../actions/data-actions'


class Home extends Component {

  componentWillMount() {
    this.props.fetchServer()
  }

  render() {

    if (!this.props.data.servers) {
      return (
        <div>
          <div> Welcome Home!</div>
        </div>
      )
    } else {
      const serverList = this.props.data.servers.map( server => (
        <li key={`id-${server.name}`}>
          <div>{server.name}</div>
          <div>{server.distance}</div>
        </li>
      ))
      return (
        <div>
          <ul>
             {serverList}
           </ul>
        </div>
      )
    }
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    data: state.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServer: () => dispatch(Actions.fetchServer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
