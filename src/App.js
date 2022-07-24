import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navigation from './config/router'
import { store, persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading</div>} persistor={persistor}>
        <div >

            <Navigation />

        
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App