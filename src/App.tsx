import React from 'react'
import { Provider } from 'react-redux'
import { configStore } from 'store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ServerListContainer from 'containers/ServerListContainer'
import PrivateRoute from 'components/PrivateRoute'
import LoginContainer from './containers/LoginContainer'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global'

const { store } = configStore()

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <PrivateRoute path="/" component={ServerListContainer} exact />
            <Route path="/login" exact component={LoginContainer} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
