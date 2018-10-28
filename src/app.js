import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthPage from './pages/AuthPage/authContainer'
import AuthorizedHeader from './Components/common/AuthorizedHeader/AuthorizedHeader'
import ServerCountries from './pages/protected/Servers/serversContainer'
import FavoriteServers from './pages/protected/FavouriteServers/favouriteServersContainer'
import ProtectedRoute from './Hoc/ProtectedRoute'

const App = () => {
    return (
      <React.Fragment>
          <AuthorizedHeader/>
          <main>
              <Switch>
                  <Route exact path="/" component={AuthPage}/>
                  <ProtectedRoute path="/servers" component={ServerCountries}/>
                  <ProtectedRoute path='/favorite-server' component={FavoriteServers}/>
              </Switch>
          </main>
      </React.Fragment>
    )
}

export default App
