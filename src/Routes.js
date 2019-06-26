import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from './pages/Home'
export default class Routes extends Component<{}> {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="login"
            component={Login}
            initial={true}
            hideNavBar={true}
          />

          <Scene
            key="signup"
            component={Signup}
            title="Daftar"
            hideNavBar={true}
          />

          <Scene
            key="home"
            component={Home}
            hideNavBar={true}
          />
        </Stack>
      </Router>
    );
  }
}
