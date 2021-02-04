import React from 'react';
import ReactDOM from 'react-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

import './global.css';
import PageTask from "./pages/PageTask";


const container = document.getElementById('app');

ReactDOM.render(<PageTask/>, container);
