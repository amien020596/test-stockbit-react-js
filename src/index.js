import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import MoviewReducer from './Store/Reducers/MovieReducer';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { SearchContextProvider } from './Store/Context/Search-context';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const rootReducers = combineReducers(
  {
    moviesData: MoviewReducer
  }
)
const store = createStore(rootReducers, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <SearchContextProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </SearchContextProvider>,
  document.getElementById('root')
);