/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import Home from "./src/pages/Home";
import SplashScreen from "./src/pages/SplashScreen";
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = { isLoading: true };
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    return <Home />;
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 5000)
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
}
