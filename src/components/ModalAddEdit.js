import {Image, StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Colors,
  horizontalScale,
  imageDefaultUrl,
  moderateScale,
  screenHeight,
  verticalScale,
} from '~/utils'
import Input from './Input'
import Button from './Button'

const ModalAddEdit = props => {
  const firstName = useRef()
  const lastName = useRef()
  const age = useRef()
  const photoLink = useRef()

  const [linkPhoto, setLinkPhoto] = useState('')
  const [errorValid, setErrorValid] = useState({
    firstName: false,
    lastName: false,
    age: false,
  })

  const onErrorImage = () => {
    setLinkPhoto(imageDefaultUrl)
  }

  const checkValidate = () => {
    const isValid =
      firstName?.current?.getKeyword()?.trim().length >= 3 &&
      lastName?.current?.getKeyword()?.length >= 3 &&
      age?.current?.getKeyword()?.length > 0 &&
      age?.current?.getKeyword()?.trim() != 0

    if (isValid) {
      setErrorValid({
        firstName: false,
        lastName: false,
        age: false,
      })
      props?.onSubmit({
        firstName: firstName?.current?.getKeyword()?.trim(),
        lastName: lastName?.current?.getKeyword(),
        age: age?.current?.getKeyword()?.trim(),
        photo:
          linkPhoto.match(/https/g) !== null ||
          linkPhoto.match(/http/g) !== null
            ? linkPhoto
            : imageDefaultUrl,
      })
    } else {
      setErrorValid({
        firstName: firstName?.current?.getKeyword()?.trim().length < 3,
        lastName: lastName?.current?.getKeyword()?.length < 3,
        age:
          age?.current?.getKeyword()?.length == 0 ||
          age?.current?.getKeyword()?.trim() == 0,
      })
    }
  }

  useEffect(() => {
    if (props?.isVisible) {
      setErrorValid({
        firstName: false,
        lastName: false,
        age: false,
      })
      setLinkPhoto('')

      if (props?.editData) {
        firstName.current?.setKeyword(
          props?.editData?.firstName
            ? props?.editData?.firstName.toString()
            : '',
        )
        lastName.current?.setKeyword(
          props?.editData?.lastName ? props?.editData?.lastName.toString() : '',
        )
        age.current?.setKeyword(
          props?.editData?.age ? props?.editData?.age.toString() : '',
        )
        photoLink.current?.setKeyword(
          props?.editData?.photo ? props?.editData?.photo.toString() : '',
        )
        setLinkPhoto(
          props?.editData?.photo ? props?.editData?.photo.toString() : '',
        )
      }
    }
  }, [props?.isVisible])

  return (
    <Modal
      statusBarTranslucent
      isVisible={props?.isVisible}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      useNativeDriver={true}
      backdropOpacity={0.4}
      style={styles.modal}
      animationInTiming={300}
      animationOutTiming={500}
      coverScreen={true}
      deviceHeight={screenHeight}>
      <KeyboardAvoidingView
        behavior='padding'
        keyboardVerticalOffset={verticalScale(30)}>
        <View style={styles.container}>
          <View style={styles.cancel}>
            <Icon
              size={moderateScale(25)}
              name={'cancel'}
              color={Colors.violetsBlue}
              onPress={() => props?.setIsVisible(!props?.isVisible)}
            />
          </View>

          <View style={styles.inputComponent}>
            <Text style={styles.textlabel}>
              First Name<Text style={styles.star}>*</Text>
            </Text>
            <Input
              ref={firstName}
              placeholder={'Type your first name'}
              containerStyle={styles.inputContainer}
              inputStyle={styles.input}
            />
            {errorValid.firstName && (
              <Text style={styles.textError}>
                First name can not be empty or less than 3 characters
              </Text>
            )}
          </View>

          <View style={styles.inputComponent}>
            <Text style={styles.textlabel}>
              Last Name<Text style={styles.star}>*</Text>
            </Text>
            <Input
              ref={lastName}
              placeholder={'Type your last name'}
              containerStyle={styles.inputContainer}
              inputStyle={styles.input}
            />
            {errorValid.lastName && (
              <Text style={styles.textError}>
                Last name can not be empty or less than 3 characters
              </Text>
            )}
          </View>

          <View style={styles.inputComponent}>
            <Text style={styles.textlabel}>
              Age<Text style={styles.star}>*</Text>
            </Text>
            <Input
              ref={age}
              placeholder={'Type your age'}
              containerStyle={styles.inputContainer}
              inputStyle={styles.input}
              keyboardType={'number-pad'}
            />
            {errorValid.age && (
              <Text style={styles.textError}>Age can not be empty or 0</Text>
            )}
          </View>

          <View style={styles.inputComponent}>
            <Text style={styles.textlabel}>Image URL</Text>
            <Input
              ref={photoLink}
              placeholder={
                'Type your image URL (should be with http:// or https://)'
              }
              containerStyle={styles.inputContainer}
              inputStyle={styles.input}
              onEndEditing={() =>
                setLinkPhoto(photoLink?.current?.getKeyword())
              }
            />
            {linkPhoto !== '' && (
              <>
                <Text style={styles.textlabel}>Preview Image</Text>
                {(linkPhoto.match(/https/g) !== null ||
                  linkPhoto.match(/http/g) !== null) && (
                  <Image
                    style={styles.image}
                    resizeMode='contain'
                    source={{uri: linkPhoto}}
                    onError={() => onErrorImage()}
                  />
                )}
              </>
            )}
          </View>

          <Button
            title={props?.editData ? 'Edit Contact' : 'Add Contact'}
            onPress={() => checkValidate()}
            loading={props?.loadingAdd}
            buttonStyle={props?.editData && styles.editButton}
            titleStyle={props?.editData && {color: Colors.violetsBlue}}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export default ModalAddEdit

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    backgroundColor: Colors.defaultWhite,
    marginHorizontal: horizontalScale(15),
    borderRadius: moderateScale(8),
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(20),
  },
  inputContainer: {
    alignSelf: 'center',
    width: horizontalScale(355),
    height: verticalScale(45),
  },
  inputComponent: {marginBottom: verticalScale(20)},
  input: {
    fontSize: moderateScale(12),
    marginHorizontal: horizontalScale(2),
  },
  textlabel: {
    fontSize: moderateScale(14),
    color: Colors.eerieBlack,
    marginBottom: verticalScale(2),
  },
  image: {
    width: horizontalScale(40),
    height: verticalScale(40),
    borderRadius: moderateScale(20),
  },
  cancel: {alignItems: 'flex-end', marginBottom: verticalScale(5)},
  textError: {
    color: Colors.red,
    fontSize: moderateScale(12),
  },
  star: {
    fontSize: moderateScale(14),
    color: Colors.red,
  },
  editButton: {
    borderColor: Colors.violetsBlue,
    backgroundColor: Colors.defaultWhite,
    borderWidth: moderateScale(1),
    elevation: 2,
  },
})
