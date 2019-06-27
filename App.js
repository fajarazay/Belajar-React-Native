/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createAppContainer } from 'react-navigation'
import AppNavigator from './src/navigator'
type Props = {};

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return <AppContainer />
  }
}
