import React from 'react'
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useTranslation } from 'react-i18next'
// @ts-ignore
import styled from '@emotion/native'

import colors from 'theme/colors'

import BottomButton from 'components/BottomButton'
import { StackNavigationProp } from '@react-navigation/stack'

const gradientColors = {
  top: colors.flatPurple.dark,
  bottom: colors.flatMagenta.light,
}

const SafeArea = styled.SafeAreaView({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
})

const Logo = styled.Image({
  width: 150,
  height: 150,
  padding: 20,
})

const Heading = styled.Text({
  fontSize: 32,
  color: '#fff',
  marginTop: 16,
})

const Subtitle = styled.Text({
  color: '#fff',
  fontSize: 16,
  marginTop: 8,
})

const Slogan = styled.Text({
  fontFamily: 'Montserrat-Regular',
  textAlign: 'center',
  fontSize: 16,
  color: '#fff',
  marginTop: 48,
})

const styles = StyleSheet.create({
  gradientStyle: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const Welcome = ({ navigation }: { navigation: StackNavigationProp<any> }) => {
  const { t } = useTranslation('welcome')
  return (
    <>
      <LinearGradient
        colors={Object.values(gradientColors)}
        style={styles.gradientStyle}
      >
        <SafeArea>
          <Logo
            source={require('assets/logo.png')}
            resizeMode="contain"
          />
          <Heading>
            <Text style={{ fontFamily: 'Montserrat-Bold' }}> {t('expo')} </Text>
            <Text style={{ fontFamily: 'Montserrat-Regular' }}> {t('starter')} </Text>
          </Heading>
          <Subtitle>
            {`${t('by')} `}
            <Text style={{ fontFamily: 'Montserrat-Bold' }}>
              {t('telosDreamStack')}
            </Text>
          </Subtitle>
          <Slogan>{t('exploreAllTheFeaturesOfTelosDreamstack')}</Slogan>
          <BottomButton
            title={t('alrightLetsGo')}
            onPress={() => {
              navigation.push('CreatePin')
            }}
            disabled={false}
          />
        </SafeArea>
      </LinearGradient>
    </>
  )
}

export default Welcome
