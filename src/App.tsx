import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { configStore } from 'store'

const { store, persistor } = configStore()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <h1>App</h1>
      </PersistGate>
    </Provider>
  )
}

export default App
