import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import UnauthenticatedStackNavigator from 'pages/navigation/UnauthenticatedStackNavigator'
import MainStackNavigator from 'pages/navigation/MainStackNavigator'

import AuthLoading from 'pages/AuthLoading'

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
