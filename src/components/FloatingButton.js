import {useNavigation} from '@react-navigation/core'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {
  Colors,
  ROUTE_NAMES,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '~/utils'

const FloatingButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={styles.floatingButton}>
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    backgroundColor: Colors.violetsBlue,
    width: horizontalScale(60),
    height: verticalScale(60),
    borderRadius: moderateScale(35),
    bottom: verticalScale(20),
    right: horizontalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.antiflashWhite,
    borderWidth: moderateScale(3)
  },
  plus: {fontSize: moderateScale(40), color: Colors.defaultWhite}
})

export default FloatingButton
