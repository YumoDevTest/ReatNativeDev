/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
//import register from './test1/register'
import setup from './setup'
import navimodule from './test1/navimodule'
import TestNavigator from './test2/TestNavigator'


AppRegistry.registerComponent('rndev', () => TestNavigator);
