import React from 'react'
import { Link } from 'react-router-dom'

import QuitIcon from './svg/QuitIcon'

const Home = (props) => {
  return props.authenticated
    ? (
      <header>
        <img alt="Logo" src="../images/logotype-testio-dark.png" width="115" />
        <Link to="/logout" className="btn btn-link">
          <QuitIcon />
          Logout
        </Link>
      </header>
    )
    : (<div></div>)
}

export default Home
