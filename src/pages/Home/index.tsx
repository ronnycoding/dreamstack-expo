import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function Home() {
  return (
    <View style={homeStyles.container}>
      <Text>Home</Text>
    </View>
  )
}
