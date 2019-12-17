import { createStackNavigator } from 'react-navigation-stack'

import { HOME } from './keys'
import Home from 'pages/Home'

const MainStackNavigator = createStackNavigator({
  [HOME]: Home,
})

export default MainStackNavigator
