import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from '../Views/Home';

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      tabBarVisible: false,
      title: 'Home',
      header: null,
    }),
  },
}, {
  stackBarOptions: {
    style: {},
  }
});

export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
});