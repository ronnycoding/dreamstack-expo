import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'

import AuthSwitcherNavigator from './pages/navigation/AuthSwitcherNavigator'
import Loading from './pages/Loading'
import { PinSetupProvider } from './lib/hooks/usePinSetup'

export default function App() {
  const [isLoadingFonts, setIsLoadingFonts] = useState(true)
  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'Montserrat-Thin': require('./assets/fonts/Montserrat/Montserrat-Thin.ttf'),
          'Montserrat-Regular': require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
          'Montserrat-Bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
          'Montserrat-Black': require('./assets/fonts/Montserrat/Montserrat-Black.ttf'),
        })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      } finally {
        setIsLoadingFonts(false)
      }
    }
    loadFonts()
  }, [])
  return isLoadingFonts ? (
    <Loading />
  ) : (
    <PinSetupProvider>
      <AuthSwitcherNavigator />
    </PinSetupProvider>
  )
}
