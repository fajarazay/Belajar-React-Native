import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";

import Logo from "../components/Logo";

import FormLogin from "../components/FormLogin";

export default class Login extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#263238" barStyle="light-content" />

        <Logo />

        <FormLogin type="Masuk" />

        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Belum punya akun?</Text>

          <TouchableOpacity>
            <Text style={styles.signupButton}> Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#37474F",

    flex: 1,

    alignItems: "center",

    justifyContent: "center"
  },

  signupTextCont: {
    flexGrow: 1,

    alignItems: "flex-end",

    justifyContent: "center",

    paddingVertical: 16,

    flexDirection: "row"
  },

  signupText: {
    color: "rgba(255,255,255,0.6)",

    fontSize: 16
  },

  signupButton: {
    color: "#ffffff",

    fontSize: 16,

    fontWeight: "500"
  }
});
