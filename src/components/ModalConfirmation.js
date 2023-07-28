import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Colors,
  Fonts,
  horizontalScale,
  screenHeight,
  verticalScale,
  moderateScale,
} from '~/utils'
import Button from './Button'

const ModalConfirmation = props => {
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
      deviceHeight={screenHeight}
      onBackButtonPress={() => props?.setIsVisible(!props?.isVisible)}
      onBackdropPress={() => props?.setIsVisible(!props?.isVisible)}>
      <>
        <View style={styles.header}>
          <Text style={styles.title}>{props?.title}</Text>
          <Icon
            size={moderateScale(25)}
            name={'cancel'}
            color={Colors.violetsBlue}
            style={styles.close}
            onPress={() => props?.setIsVisible(!props?.isVisible)}
          />
        </View>
        <View style={styles.body}>
          <Text style={[styles.message, props.styleMessage]}>
            {props?.message}
          </Text>
          <View style={styles.wrapperBtn}>
            <Button
              title='No'
              onPress={props?.onCancel}
              titleStyle={{color: Colors.violetsBlue}}
              containerStyle={{width: '48%'}}
              buttonStyle={styles.cancel}
              disabled={props?.loading || false}
            />
            <Button
              title='Yes'
              onPress={props?.onOk}
              containerStyle={{width: '48%'}}
              loading={props?.loading || false}
            />
          </View>
        </View>
      </>
    </Modal>
  )
}

export default ModalConfirmation

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.antiflashWhite,
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(24),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(10),
  },
  title: {
    fontFamily: Fonts[700],
    fontSize: moderateScale(20),
    lineHeight: verticalScale(24),
    color: Colors.violetsBlue,
  },
  close: {
    position: 'absolute',
    right: horizontalScale(24),
  },
  body: {
    backgroundColor: Colors.defaultWhite,
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(24),
  },
  message: {
    fontFamily: Fonts[600],
    fontSize: moderateScale(16),
    lineHeight: verticalScale(24),
    color: Colors.eerieBlack,
    marginBottom: verticalScale(30),
  },
  wrapperBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancel: {
    borderColor: Colors.violetsBlue,
    backgroundColor: Colors.defaultWhite,
    borderWidth: moderateScale(1),
  },
})
