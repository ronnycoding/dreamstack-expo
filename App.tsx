import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { WebView } from 'react-native-webview'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/splash.png')} style={{width: '100%', height: '100%'}}>
      <WebView
        originWhitelist={['*']}
        source={{ uri: 'https://blockmatic.io' }}
      />
      </ImageBackground>
    </View>
  );
}