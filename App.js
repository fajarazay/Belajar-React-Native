/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import Routes from "./src/Routes";
import Login from "./src/pages/Login";
import SplashScreen from "./src/pages/SplashScreen";
import { Router } from "react-native-router-flux";
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

    return <Routes />;
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
