import React from 'react'

const Home = (props) => {
  // fakeAuth.signout(() => history.push('/'))

  return props.authenticated
    ? (
      <div>
        Welcome! <button onClick={() => {
        }}>Sign out</button>
        <hr />
      </div>
    )
    : (<div></div>)
}

export default Home
