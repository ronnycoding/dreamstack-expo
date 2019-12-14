import React from 'react'
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native'

const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function Loading() {
  return (
    <View style={loadingStyles.container}>
      <ActivityIndicator size='large' />
      <Text>Loading</Text>
    </View>
  )
}
