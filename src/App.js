import React, { Component } from 'react';
import './App.css';
import Bear from "./Bear"
import CRUDBear from './crudBear'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import axios from "axios"
import thunk from 'redux-thunk'
import logo from './panda.svg'
import rootReducer from './reducers'

export const store = createStore(rootReducer, applyMiddleware(logger, thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <head>
         
        </head>
       
       <CRUDBear />
        <Bear />
      </Provider>
    );
  }
}

export default App;