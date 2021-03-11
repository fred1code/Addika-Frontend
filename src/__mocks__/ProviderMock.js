import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import initialState from '../reducers/taskReducer';
import reducer from '../reducers/index';

const store = createStore(reducer, initialState);

const ProviderMock = props =>(

    <Provider store={store}/>

);

export default ProviderMock;