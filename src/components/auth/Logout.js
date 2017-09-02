import React, { Component}  from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as Actions from '../../actions/auth-actions'

class Logout extends Component {
  componentWillMount() {
    this.props.dispatch(Actions.logout())
  }

  render() {
    return (
      <Redirect to="/" />
    )
  }

}

export default connect()(Logout)
