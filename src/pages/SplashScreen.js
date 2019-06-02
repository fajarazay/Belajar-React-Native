import React from "react";
import { StatusBar, View, Text, ActivityIndicator } from "react-native";
import LogoSpin from "../components/LogoSpin";

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#34495e"
        }}
      >
        <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
        <LogoSpin />
        <ActivityIndicator color={"white"} />
      </View>
    );
  }
}
