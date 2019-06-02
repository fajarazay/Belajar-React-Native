import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  Animated,
  AppRegistry,
  Easing
} from "react-native";

spinValue = new Animated.Value(0);

// First set up animation
Animated.timing(this.spinValue, {
  toValue: 20,
  duration: 600000,
  easing: Easing.linear
}).start();

// Second interpolate beginning and end values (in this case 0 and 1)
const spin = this.spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ["0deg", "360deg"]
});

export default class LogoSpin extends Component<{}> {
  render() {
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
    color: "rgba(255, 255, 255, 0.7)"
  }
});

AppRegistry.registerComponent("animations", () => animations);
