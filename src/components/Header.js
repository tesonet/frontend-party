import React from 'react'
import { Button } from 'reactstrap'

import QuitIcon from './svg/QuitIcon'

const Home = (props) => {
  // fakeAuth.signout(() => history.push('/'))

  return props.authenticated
    ? (
      <header>
        <img src="../images/logotype-testio-dark.png" width="115" />
        <Button color="link" onClick={() => {}}>
          <QuitIcon />
          Logout
        </Button>
      </header>
    )
    : (<div></div>)
}

export default Home
