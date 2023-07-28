import {Text} from 'react-native'
import React, {useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import LottieView from 'lottie-react-native'

import {FocusedStatusBar, MainContainer} from '~/components'
import {Colors, ROUTE_NAMES} from '~/utils'
import styles from './styles'
import { SplashLogo } from '~/assets'

const Splash = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(ROUTE_NAMES.LIST)
    }, 3000)
  }, [])

  return (
    <MainContainer containerStyle={styles.container}>
      <FocusedStatusBar
        backgroundColor={Colors.defaultWhite}
        barStyle='dark-content'
      />
      <LottieView source={SplashLogo} autoPlay loop style={styles.logo} />
      <Text style={styles.text}>My Contact</Text>
    </MainContainer>
  )
}

export default Splash
