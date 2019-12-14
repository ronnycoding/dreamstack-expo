'use strict'
let _a
exports.__esModule = true
const react_navigation_stack_1 = require('react-navigation-stack')
const keys_1 = require('./keys')
const Authenticate_1 = require('../../Authenticate')
const Welcome_1 = require('../../Welcome')
const CreatePin_1 = require('../../CreatePin')
const ConfirmPin_1 = require('../../ConfirmPin')
const UnauthenticatedStackNavigator = react_navigation_stack_1.createStackNavigator(
  ((_a = {}),
  (_a[keys_1.WELCOME] = Welcome_1.default),
  (_a[keys_1.AUTHENTICATE] = Authenticate_1.default),
  (_a[keys_1.CREATE_PIN] = CreatePin_1.default),
  (_a[keys_1.CONFIRM_PIN] = ConfirmPin_1.default),
  _a),
)
exports.default = UnauthenticatedStackNavigator
