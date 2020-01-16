import React from 'react'
import { ActivityIndicator } from 'react-native'
// @ts-ignore
import styled from '@emotion/native'


export default function Loading() {

  const LoadingView = styled.View({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  })

  return (
    <LoadingView>
      <ActivityIndicator size="large" />
    </LoadingView>
  )
}
