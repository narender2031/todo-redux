import React from 'react';
import {render} from 'react-dom';
import {Provider} from  'react-redux'
import { createStore } from 'redux'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TodoReducer from './redux/reducers/todo.js'
import App from './containers/App';
import * as serviceWorker from './services/serviceWorker';

const store = createStore(
  TodoReducer,
  window.devToolsExtension && window.devToolsExtension()
)


render(
  <Provider store={store}>
      <App /> 
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
