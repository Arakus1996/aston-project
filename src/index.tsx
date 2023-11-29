import ReactDOM from 'react-dom/client'

import './index.css'
import 'reset-css'
import { Provider } from 'react-redux'

import './app/firebase'

import { store } from './store/store'
import { App } from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
