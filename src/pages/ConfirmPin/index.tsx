import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Alert } from 'react-native'
import VirtualKeyboard from 'react-native-virtual-keyboard'
import { NavigationScreenComponent } from 'react-navigation'
import * as Haptics from 'expo-haptics'
import * as SecureStore from 'expo-secure-store'

import { useNavigation } from 'react-navigation-hooks'
import PinDot from '../../components/PinDot'
import { usePinSetup, usePinSetupActions } from '../../lib/hooks/usePinSetup'
import { AUTHENTICATE } from '../navigation/UnauthenticatedStackNavigator/keys'
import { PIN } from '../../lib/keys/secureStore'

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

const ConfirmPin: NavigationScreenComponent<{}, {}> = () => {
  const { navigate } = useNavigation()
  const { pin, pinConfirmation } = usePinSetup()
  const { setPinConfirmation, reset } = usePinSetupActions()

  // On view exit, clean up pins
  useEffect(() => {
    return () => {
      reset()
    }
  }, [reset])

  const handleCompletion = async () => {
    await SecureStore.setItemAsync(PIN, pinConfirmation)
    navigate(AUTHENTICATE)
  }

  const handleVirtualKeyboard = (val: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    let newPin = pinConfirmation
    if (val === 'back') {
      newPin = newPin.substr(0, newPin.length - 1)
    } else {
      newPin = `${newPin}${val}`
    }
    setPinConfirmation(newPin)
    if (newPin.length === 6 && pin === newPin) {
      handleCompletion()
    } else if (newPin.length === 6 && pin !== newPin) {
      Alert.alert('Wrong pin', "The pins you provided don't match")
      setPinConfirmation('')
    }
  }

  return (
    <SafeAreaView style={styles.viewStyle}>
      <Text style={styles.title}>Confirm Pin</Text>
      <View style={styles.dotContainer}>
        <PinDot active={pinConfirmation.length >= 1} />
        <PinDot active={pinConfirmation.length >= 2} />
        <PinDot active={pinConfirmation.length >= 3} />
        <PinDot active={pinConfirmation.length >= 4} />
        <PinDot active={pinConfirmation.length >= 5} />
        <PinDot active={pinConfirmation.length >= 6} />
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

ConfirmPin.navigationOptions = {
  title: 'Confirm Pin',
}

export default ConfirmPin
