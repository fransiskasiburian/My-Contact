import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
} from 'react-native'
import {
  Colors,
  Fonts,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '~/utils'

const Button = props => {
  return (
    <View
      style={[
        style.button,
        {...props.containerStyle},
        props.loading && {
          backgroundColor: Colors.antiflashWhite,
        },
      ]}>
      <TouchableOpacity
        style={[
          style.button,
          {...props.buttonStyle},
          props.loading && {
            backgroundColor: Colors.antiflashWhite,
          },
        ]}
        activeOpacity={0.5}
        onPress={props?.onPress}
        disabled={props.disabled || props.loading}>
        {props.loading ? (
          <ActivityIndicator />
        ) : (
          <View style={style.wrapButton}>
            {props?.icon && props?.icon}

            <Text style={[style.textFooter, {...props?.titleStyle}]}>
              {props?.title || ''}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default Button

const style = StyleSheet.create({
  button: {
    height: verticalScale(45),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    backgroundColor: Colors.brightNavyBlue,
  },
  textFooter: {
    fontFamily: Fonts[600],
    fontSize: moderateScale(18),
    color: Colors.defaultWhite,
    textAlign: 'center',
  },
  wrapButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
