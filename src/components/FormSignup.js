import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import {Actions} from 'react-native-router-flux'

export default class FormLogin extends Component<{}> {
  goHome() {
    Actions.home({accessFrom: 'Signup'})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.confirmationPassword.focus()}
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          ref={input => (this.confirmationPassword = input)}
          onSubmitEditing={() => this.password.focus()}
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Confirmation Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          ref={input => (this.password = input)}
        />

        <TouchableOpacity style={styles.button} onPress={this.goHome}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
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

  inputBox: {
    width: 300,

    backgroundColor: "#546E7A",

    borderRadius: 25,

    paddingHorizontal: 16,

    fontSize: 16,

    color: "#ffffff",

    marginVertical: 10
  },

  button: {
    width: 300,

    backgroundColor: "#263238",

    borderRadius: 25,

    marginVertical: 10,

    paddingVertical: 13
  },

  buttonText: {
    fontSize: 16,

    fontWeight: "500",

    color: "#ffffff",

    textAlign: "center"
  }
});
