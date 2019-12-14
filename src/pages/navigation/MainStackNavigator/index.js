'use strict'
let _a
exports.__esModule = true
const react_navigation_stack_1 = require('react-navigation-stack')
const keys_1 = require('./keys')
const Home_1 = require('../../Home')
const MainStackNavigator = react_navigation_stack_1.createStackNavigator(
  ((_a = {}), (_a[keys_1.HOME] = Home_1.default), _a),
)
exports.default = MainStackNavigator
