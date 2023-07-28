import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import {ROUTE_NAMES} from '~/utils'
import {DetailContact, List, Splash} from '~/screens'

const Stack = createStackNavigator()
const navigationRef = React.createRef()

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={ROUTE_NAMES.SPLASH}
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name={ROUTE_NAMES.SPLASH}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTE_NAMES.LIST}
          component={List}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTE_NAMES.DETAIL_CONTACT}
          component={DetailContact}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
