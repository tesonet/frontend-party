import React from 'react'
import { Provider } from 'react-redux'
import { configStore } from 'store'
import Login from './components/Login/Login'

const { store } = configStore()

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Login />
      {/* </PersistGate> */}
    </Provider>
  )
}

export default App
