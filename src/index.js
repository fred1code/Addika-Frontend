import React from 'react';
import ReactDOM from 'react-dom';

import 'react-app-polyfill/ie9';
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'core-js/stable';
import { createStore , applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk'
import reducers from './reducers';

import './global.css';
import PageTask from "./pages/PageTask";
const store = createStore(
    reducers, //Todos los reducers
    {},
    applyMiddleware(reduxThunk) //Estado inicial
);

const container = document.getElementById("app");

ReactDOM.render(
    <Provider store={store}>
          <PageTask />
    </Provider>
  
    , container);
