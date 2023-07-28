import {StyleSheet} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Colors} from '~/utils'

const MainContainer = ({children, containerStyle}) => {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      {children}
    </SafeAreaView>
  )
}

export default MainContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.defaultWhite,
  },
})
