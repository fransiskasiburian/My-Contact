import {View, Text, Image, ScrollView, ActivityIndicator} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import Icon from 'react-native-vector-icons/Ionicons'

import {Creators as ContactCreator} from '~/store/ducks'
import {
  Button,
  FocusedStatusBar,
  MainContainer,
  ModalAddEdit,
  ModalConfirmation,
} from '~/components'
import {
  Colors,
  ROUTE_NAMES,
  imageDefaultUrl,
  moderateScale,
  verticalScale,
} from '~/utils'
import {styles} from './styles'

const DetailContact = ({navigation, route}) => {
  const contactAction = bindActionCreators(ContactCreator, useDispatch())
  const storeContact = useSelector(state => state.ducks)

  const [openEdit, setOpenEdit] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  useEffect(() => {
    if (route?.params?.id) {
      contactAction.getDetailContactRequest(route?.params?.id)
    }
  }, [route?.params])

  useEffect(() => {
    if (
      storeContact.successUpdate ||
      storeContact.successDelete ||
      storeContact.errorDelete ||
      storeContact.errorUpdate
    ) {
      setOpenEdit(false)
      setOpenDelete(false)
      setTimeout(() => contactAction.clearStatus(), 200)

      if (storeContact.successUpdate) {
        contactAction.getDetailContactRequest(route?.params?.id)
      } else if (storeContact.successDelete) {
        navigation.navigate(ROUTE_NAMES.LIST)
      }
    }
  }, [
    storeContact.successUpdate,
    storeContact.successDelete,
    storeContact.errorDelete,
    storeContact.errorUpdate,
  ])

  return (
    <MainContainer>
      <FocusedStatusBar
        translucent
        backgroundColor={Colors.defaultWhite}
        barStyle='dark-content'
      />
      {storeContact.loadingDetail ? (
        <ActivityIndicator style={{marginTop: verticalScale(20)}} />
      ) : (
        <>
          <Icon
            name='chevron-back-outline'
            size={verticalScale(25)}
            color={Colors.defaultBlack}
            style={styles.marginStyle}
            onPress={() => navigation.navigate(ROUTE_NAMES.LIST)}
          />
          <ScrollView>
            <Image
              style={styles.image}
              resizeMode='contain'
              source={{
                uri:
                  storeContact.detail?.photo?.match(/https/g) !== null ||
                  storeContact.detail?.photo?.match(/http/g) !== null
                    ? storeContact.detail?.photo
                    : imageDefaultUrl,
              }}
            />
            <Text style={styles.name}>
              {(storeContact.detail?.firstName || '') +
                ' ' +
                (storeContact.detail?.lastName || '')}
            </Text>

            <View style={styles.containerDetail}>
              <Text style={styles.label}>First Name</Text>
              <Text style={styles.value}>
                {storeContact.detail?.firstName || ''}
              </Text>

              <Text style={styles.label}>Last Name</Text>
              <Text style={styles.value}>
                {storeContact.detail?.lastName || ''}
              </Text>

              <Text style={styles.label}>Age</Text>
              <Text style={styles.value}>{storeContact.detail?.age || ''}</Text>
            </View>
          </ScrollView>

          <View style={styles.buttonContainer}>
            <Button
              titleStyle={{color: Colors.royalBlue}}
              buttonStyle={styles.editButton}
              title={'Edit'}
              icon={
                <Icon
                  size={moderateScale(18)}
                  name={'create-outline'}
                  color={Colors.royalBlue}
                  style={styles.buttonIcon}
                />
              }
              onPress={() => setOpenEdit(true)}
            />
            <Button
              buttonStyle={styles.deleteButton}
              title={'Delete'}
              icon={
                <Icon
                  size={moderateScale(18)}
                  name={'trash-outline'}
                  color={Colors.defaultWhite}
                  style={styles.buttonIcon}
                />
              }
              onPress={() => setOpenDelete(true)}
            />
          </View>
        </>
      )}

      <ModalAddEdit
        setIsVisible={setOpenEdit}
        isVisible={openEdit}
        onSubmit={body =>
          contactAction.updateContactRequest({id: route?.params?.id, body})
        }
        editData={storeContact.detail}
        loadingAdd={storeContact.loadingUpdate}
      />

      <ModalConfirmation
        setIsVisible={setOpenDelete}
        isVisible={openDelete}
        title={'Delete Contact'}
        message={`Are you sure delete ${storeContact.detail?.firstName || ''} ${
          storeContact.detail?.lastName || ''
        } from your contact?`}
        loading={storeContact.loadingDelete}
        onCancel={() => setOpenDelete(false)}
        onOk={() => contactAction.deleteContactRequest(route?.params?.id)}
      />
    </MainContainer>
  )
}

export default DetailContact
