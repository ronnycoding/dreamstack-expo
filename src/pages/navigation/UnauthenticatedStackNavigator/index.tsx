import { createStackNavigator } from 'react-navigation-stack'

import { AUTHENTICATE, WELCOME, CREATE_PIN, CONFIRM_PIN } from './keys'

import Authenticate from 'pages/Authenticate'
import Welcome from 'pages/Welcome'
import CreatePin from 'pages/CreatePin'
import ConfirmPin from 'pages/ConfirmPin'

const UnauthenticatedStackNavigator = createStackNavigator(
  {
    [WELCOME]: Welcome,
    [AUTHENTICATE]: Authenticate,
    [CREATE_PIN]: CreatePin,
    [CONFIRM_PIN]: ConfirmPin,
  },
  {
    initialRouteName: WELCOME,
  }
)

export default UnauthenticatedStackNavigator
