import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthPage from './pages/AuthPage/authContainer'
import AuthorizedHeader from './Components/common/AuthorizedHeader/AuthorizedHeader'
import ServerCountries from './pages/protected/Servers/serversContainer'
import FavouriteServers from './pages/protected/FavouriteServers/favouriteServersContainer'
import ProtectedRoute from './Hoc/ProtectedRoute'
import routes from './constants/routes'

const App = () => {
    return (
      <React.Fragment>
          <AuthorizedHeader/>
          <main>
              <Switch>
                  <Route exact path={routes.HOME} component={AuthPage}/>
                  <ProtectedRoute path={routes.SERVERS} component={ServerCountries}/>
                  <ProtectedRoute path={routes.FAVOURITE_SERVER} component={FavouriteServers}/>
                  <Route render={() => (
                    <div className="not-found">
                        <div className="not-found_bg"></div>
                        <div className="not-found_overlay"></div>
                        <div className="not-found_content">
                            <div className="not-found_content_message">
                                TRY TO SURF IN ANOTHER PLACE<br/><b/>
                                THERE IS NOTHING IN HERE
                            </div>
                            <div className="not-found_content_status">404</div>
                        </div>
                    </div>
                  )}/>
              </Switch>
          </main>
      </React.Fragment>
    )
}

export default App
