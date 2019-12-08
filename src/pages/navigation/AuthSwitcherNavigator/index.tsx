import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import UnauthenticatedStackNavigator from '../UnauthenticatedStackNavigator'
import MainStackNavigator from '../MainStackNavigator'

import AuthLoading from '../../AuthLoading'

import { MAIN, UNAUTHENTICATED } from './keys'

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      [MAIN]: MainStackNavigator,
      [UNAUTHENTICATED]: UnauthenticatedStackNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
)
