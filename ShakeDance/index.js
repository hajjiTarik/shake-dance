import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import { store } from './App/Store';
import App from './App/index';


const Root = () => <Provider store={store}><App/></Provider>;

AppRegistry.registerComponent('ShakeDance', () => Root);
