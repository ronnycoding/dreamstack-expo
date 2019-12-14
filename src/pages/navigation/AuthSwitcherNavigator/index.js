'use strict'
let _a
exports.__esModule = true
const react_navigation_1 = require('react-navigation')
const UnauthenticatedStackNavigator_1 = require('../UnauthenticatedStackNavigator')
const MainStackNavigator_1 = require('../MainStackNavigator')
const AuthLoading_1 = require('../../AuthLoading')
const keys_1 = require('./keys')
exports.default = react_navigation_1.createAppContainer(
  react_navigation_1.createSwitchNavigator(
    ((_a = {
      AuthLoading: AuthLoading_1.default,
    }),
    (_a[keys_1.MAIN] = MainStackNavigator_1.default),
    (_a[keys_1.UNAUTHENTICATED] = UnauthenticatedStackNavigator_1.default),
    _a),
    {
      initialRouteName: 'AuthLoading',
    },
  ),
)
