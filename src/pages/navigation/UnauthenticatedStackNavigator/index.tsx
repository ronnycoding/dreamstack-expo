import { createStackNavigator } from 'react-navigation-stack'

import { AUTHENTICATE, WELCOME, CREATE_PIN, CONFIRM_PIN } from './keys'

import Authenticate from '../../Authenticate'
import Welcome from '../../Welcome'
import CreatePin from '../../CreatePin'
import ConfirmPin from '../../ConfirmPin'

const UnauthenticatedStackNavigator = createStackNavigator({
  [WELCOME]: Welcome,
  [AUTHENTICATE]: Authenticate,
  [CREATE_PIN]: CreatePin,
  [CONFIRM_PIN]: ConfirmPin,
})

export default UnauthenticatedStackNavigator
