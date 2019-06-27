import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import DetailMovie from './pages/DetailMovie'
import Home from './pages/Home'

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
    },
    DetailMovie: {
        screen: DetailMovie,
    },
}, {
        initialRouteName: 'Home',
    });

export default createAppContainer(AppNavigator); rr