import React from 'react'
import {StatusBar} from 'react-native'
import {Provider} from 'react-redux'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import FlashMessage from 'react-native-flash-message'

import {Colors} from '~/utils'
import store from '~/store'
import Routes from '~/routes'

const AppWrapper = () => {
  return (
    <>
      <StatusBar
        backgroundColor={Colors.defaultWhite}
        barStyle='dark-content'
        translucent={true}
      />
      <Routes />
      <FlashMessage position='bottom' />
    </>
  )
}

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppWrapper />
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
