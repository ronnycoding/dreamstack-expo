import React, { useState } from 'react'
import {
  ActivityIndicator,
  Text
} from 'react-native'
import { useTranslation } from 'react-i18next'
// @ts-ignore
import styled from '@emotion/native'

import colors from 'theme/colors'

import useRegisterForPushNotifications from 'hooks/useRegisterForPushNotifications'
import Separator from 'components/Separator'
import BottomButton from 'components/BottomButton'
import { SingleChildOrString } from 'types'

const PrivateKeyInput = styled.TextInput({
  color: colors.flatBlack.dark,
  backgroundColor: colors.flatWhite.light,
  width: '100%',
  height: 50,
  fontFamily: 'Montserrat-Regular',
  paddingHorizontal: 20,
})

const Caption = styled.Text({
  fontFamily: 'Montserrat-Regular',
  color: colors.flatBlack.light,
})

const Keyboard = styled.KeyboardAvoidingView({
  flex: 1,
  width: '100%',
  padding: 20,  
})

const PrivateKeyCopy = ({ children }: SingleChildOrString) => {
  return <Caption>{children}</Caption>
}

const PrivateKeyActivityIndicator = () => {
  return (
    <>
      <Separator marginVertical={5} />
      <ActivityIndicator size="large" />
    </>
  )
}

const PrivateKeyMessage = ({ children }: SingleChildOrString) => {
  return (
    <>
      <Separator marginVertical={5} />
      <Text>{children}</Text>
    </>
  )
}

const Authenticate = () => {
  const [privateKey, setPrivateKey] = useState('')
  const [
    register,
    isRegistering,
    registerError,
  ] = useRegisterForPushNotifications(privateKey)

  const privateKeyInputHandler = (enteredText: string) => {
    setPrivateKey(enteredText)
  }

  const { t } = useTranslation('authenticate')

  const handleContinueButtonPress = () => {
    // TODO: Validate PK
    // TODO: Get Username from PK
    // TODO: Store PK, use pin-derived hash as key
    // register()
  }

  const PrivateKeyTextInput = (
    <PrivateKeyInput
      editable={!isRegistering}
      placeholder={t('pastePrivateKeyHere')}
      placeholderTextColor={colors.flatWhite.dark}
      onChangeText={privateKeyInputHandler}
    />
  )

  return (
    <>
      <Keyboard behavior="padding" enabled>
        <Caption>{t('privateKey')}</Caption>
        <Separator marginVertical={20} />
        {PrivateKeyTextInput}
        <Separator marginVertical={20} />
        <PrivateKeyCopy>{t('youCanImportYourTELOSAccount')}</PrivateKeyCopy>
        <Separator marginVertical={5} />
        {isRegistering && <PrivateKeyActivityIndicator />}
        {registerError && (
          <PrivateKeyMessage>{registerError.message}</PrivateKeyMessage>
        )}
      </Keyboard>
      <BottomButton
        title={t('continue')}
        onPress={handleContinueButtonPress}
        disabled={privateKey.length < 1}
      />
    </>
  )
}

export default Authenticate
