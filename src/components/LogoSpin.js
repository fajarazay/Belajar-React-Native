import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  Animated,
  AppRegistry,
  Easing
} from "react-native";

export default class LogoSpin extends Component<{}> {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    // First set up animation
    Animated.timing(this.spinValue, {
      toValue: 35,
      duration: 60000,
      easing: Easing.linear
    }).start();
  }

  render() {
    // Second interpolate beginning and end values (in this case 0 and 1)
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    return (
      <View style={styles.container}>
        <Animated.Image
          style={{ width: 200, height: 200, transform: [{ rotate: spin }] }}
          source={require("../images/logo.png")}
        />
        <Text style={styles.logoText}>Welcome</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    justifyContent: "center",

    alignItems: "center"
  },

  logoText: {
    marginVertical: 15,
    fontSize: 22,
    color: "#607D8B"
  }
});

AppRegistry.registerComponent("animations", () => animations);
