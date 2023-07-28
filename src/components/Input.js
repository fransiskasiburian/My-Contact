import {StyleSheet, View, TextInput, Keyboard} from 'react-native'
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from 'react'
import {
  Colors,
  Fonts,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '~/utils'
import Icon from 'react-native-vector-icons/Ionicons'

const Input = forwardRef((props, ref) => {
  const [keyword, setKeyword] = useState('')
  const [borderColor, setBorderColor] = useState(Colors.silverSand)
  const localInputRef = useRef()

  const keyboardDidHideCallback = () => {
    localInputRef?.current?.blur?.()
  }

  useImperativeHandle(ref, () => ({
    getKeyword: () => keyword,
    setKeyword: setKeyword,
  }))

  useEffect(() => {
    const keyboardDidHideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHideCallback,
    )

    return () => {
      keyboardDidHideSubscription?.remove()
    }
  }, [])

  const onEndEditing = () => {
    if (props.onEndEditing) {
      props.onEndEditing()
    }
  }

  const onChange = text => setKeyword(text)

  return (
    <>
      <View style={[styles.container(borderColor), {...props.containerStyle}]}>
        <TextInput
          {...props}
          ref={ref => {
            localInputRef && (localInputRef.current = ref)
          }}
          placeholder={props.placeholder}
          placeholderTextColor={Colors.gray}
          onFocus={() => setBorderColor(Colors.violetsBlue)}
          onBlur={() => {
            setBorderColor(Colors.silverSand)
            onEndEditing()
          }}
          style={[styles.input, {...props.inputStyle}]}
          value={keyword}
          onChangeText={text => onChange(text)}
          maxLength={props.maxLength}
          onEndEditing={onEndEditing}
        />

        {props?.search && (
          <View style={styles.icon}>
            <Icon
              size={20}
              name={'close-circle'}
              color={
                keyword.length != 0 ? Colors.violetsBlue : Colors.silverSand
              }
              style={{marginRight: horizontalScale(10)}}
              onPress={() => setKeyword('')}
            />
          </View>
        )}
      </View>
    </>
  )
})

export default Input

const styles = StyleSheet.create({
  container: color => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.defaultWhite,
    borderRadius: moderateScale(8),
    borderWidth: moderateScale(1),
    borderColor: color,
  }),
  input: {
    flex: 1,
    fontFamily: Fonts[400],
    fontSize: moderateScale(14),
    marginVertical: verticalScale(6),
    marginHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(0),
    color: Colors.eerieBlack,
  },
  icon: {
    alignSelf: 'center',
  },
})
