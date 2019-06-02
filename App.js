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
  componentWillMount() {
    this.state = {
      view: <SplashScreen />
    };

    setTimeout(() => {
      //IF FALSE NAVIGATE TO ERROR
      this.setState({ view: <Home /> });
    }, 10000); //TIME OF WAITING
  }

  render() {
    return this.state.view;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
