import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'
// @ts-ignore
import styled from '@emotion/native'

const HomeView = styled.View({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function Home() {
  const { t } = useTranslation('home')
  return (
    <HomeView>
      <Text>{t('home')}</Text>
    </HomeView>
  )
}
