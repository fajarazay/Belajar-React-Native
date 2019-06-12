import React, { Component } from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Logo from "../components/Logo";

import FormSignup from "../components/FormSignup";

import { Actions } from "react-native-router-flux";

export default class Signup extends Component<{}> {
  goBack() {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />

        <FormSignup type="Daftar" />

        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Sudah punya akun?</Text>

          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupButton}> Masuk</Text>
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
