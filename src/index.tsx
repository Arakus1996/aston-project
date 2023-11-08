import ReactDOM from 'react-dom/client'
import React from 'react'

import './index.css'
import 'reset-css'
import { Provider } from 'react-redux'
import { App } from './App'

import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
