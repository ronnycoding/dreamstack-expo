import React, { useState } from 'react'
import { NavigationScreenComponent } from 'react-navigation'
import {
  KeyboardAvoidingView,
  ActivityIndicator,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native'

import colors from '../../theme/colors'

import useRegisterForPushNotifications from '../../lib/hooks/useRegisterForPushNotifications'
import Separator from '../../components/Separator'
import BottomButton from '../../components/BottomButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  caption: {
    fontFamily: 'Montserrat-Regular',
    color: colors.flatBlack.light,
  },
  textField: {
    color: colors.flatBlack.dark,
    backgroundColor: colors.flatWhite.light,
    width: '100%',
    height: 50,
    fontFamily: 'Montserrat-Regular',
    paddingHorizontal: 20,
  },
})

const Authenticate: NavigationScreenComponent<{}, {}> = () => {
  const [privateKey, setPrivateKey] = useState('')
  const [
    register,
    isRegistering,
    registerError,
  ] = useRegisterForPushNotifications(privateKey)

  const privateKeyInputHandler = enteredText => {
    setPrivateKey(enteredText)
  }

  const handleContinueButtonPress = () => {
    // register()
  }

  return (
    <>
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <Text style={styles.caption}>Private Key</Text>
        <Separator marginVertical={20} />
        <TextInput
          editable={!isRegistering}
          placeholder='Paste your Private Key here'
          placeholderTextColor={colors.flatWhite.dark}
          style={styles.textField}
          onChangeText={privateKeyInputHandler}
        />
        <Separator marginVertical={20} />
        <Text style={styles.caption}>
          You can import your TELOS account, just be sure to use the active
          private key. This private key will be securely stored on the phone and
          can be only accessed with the PIN you set up
        </Text>
        <Separator marginVertical={5} />
        {isRegistering && (
          <>
            <Separator marginVertical={5} />
            <ActivityIndicator size='large' />
          </>
        )}
        {registerError && (
          <>
            <Separator marginVertical={5} />
            <Text>{registerError.message}</Text>
          </>
        )}
      </KeyboardAvoidingView>
      <BottomButton
        title='CONTINUE'
        onPress={handleContinueButtonPress}
        disabled={privateKey.length < 1}
      />
    </>
  )
}

Authenticate.navigationOptions = {
  title: 'Add your Private Key',
}

export default Authenticate
