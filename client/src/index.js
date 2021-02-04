import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import thunk from 'redux-thunk'
import rootReducer from './reducers/'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';

const middleWare = [thunk]
const store = createStore(rootReducer, compose(applyMiddleware(...middleWare), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);