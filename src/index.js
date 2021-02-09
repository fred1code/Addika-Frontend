import React from 'react';
import ReactDOM from 'react-dom';

import 'react-app-polyfill/ie9';
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'core-js/stable';

import './global.css';
import PageTask from "./pages/PageTask";


const container = document.getElementById('app');

ReactDOM.render(<PageTask/>, container);
