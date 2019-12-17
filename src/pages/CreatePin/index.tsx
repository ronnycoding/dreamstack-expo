import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { NavigationScreenComponent } from 'react-navigation'
import * as Haptics from 'expo-haptics'
import { useNavigation } from 'react-navigation-hooks'
import PinDot from 'components/PinDot'
const VirtualKeyboard = require('react-native-virtual-keyboard')

import { usePinSetup, usePinSetupActions } from 'lib/hooks/usePinSetup'
import { CONFIRM_PIN } from 'pages/navigation/UnauthenticatedStackNavigator/keys'

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 32,
    marginTop: 32,
  },
  dotContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 250,
    marginTop: 32,
  },
  virtualKeyboardContainer: {
    width: '100%',
    height: 300,
    position: 'absolute',
    bottom: 32,
    flex: 1,
    alignItems: 'center',
  },
  grayLine: {
    width: '80%',
    backgroundColor: '#bbb',
    marginVertical: 16,
    height: 0.5,
  },
})

const CreatePin: NavigationScreenComponent<{}, {}> = () => {
  const { navigate } = useNavigation()

  const { pin } = usePinSetup()
  const { setPin } = usePinSetupActions()

  const handleCompletion = () => {
    navigate(CONFIRM_PIN)
  }

  const handleVirtualKeyboard = (val: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    let newPin = pin
    if (val === 'back') {
      newPin = newPin.substr(0, newPin.length - 1)
    } else {
      newPin = `${newPin}${val}`
    }
    setPin(newPin)
    if (newPin.length === 6) handleCompletion()
  }

  return (
    <SafeAreaView style={styles.viewStyle}>
      <Text style={styles.title}>Set a Pin</Text>
      <View style={styles.dotContainer}>
        <PinDot active={pin.length >= 1} />
        <PinDot active={pin.length >= 2} />
        <PinDot active={pin.length >= 3} />
        <PinDot active={pin.length >= 4} />
        <PinDot active={pin.length >= 5} />
        <PinDot active={pin.length >= 6} />
      </View>
      <View style={styles.virtualKeyboardContainer}>
        <View style={styles.grayLine} />
        <VirtualKeyboard
          pressMode="char"
          color="#000"
          onPress={handleVirtualKeyboard}
        />
      </View>
    </SafeAreaView>
  )
}

CreatePin.navigationOptions = {
  title: 'Create Pin',
}

export default CreatePin
