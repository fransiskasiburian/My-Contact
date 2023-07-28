import {showMessage} from 'react-native-flash-message'
import {call, put} from 'redux-saga/effects'
import Icon from 'react-native-vector-icons/Ionicons'

import {Creators as ContactTypes} from '~/store/ducks'
import {Colors, Fonts, horizontalScale, moderateScale, request} from '~/utils'

const UrlAPI = {
  contact: `contact`,
  contact_id: id => `contact/${id}`,
}

const alertMessage = (message, type) => {
  if (message) {
    showMessage({
      message: message.toString(),
      type: type == 'error' ? 'danger' : 'success',
      icon: type == 'error' ? 'danger' : 'success',
      animated: true,
      hideStatusBar: false,
      autoHide: true,
      duration: 2000,
      floating: false,
      textStyle: {
        fontFamily: Fonts[500],
        fontSize: moderateScale(14),
      },
      style: {
        borderTopRightRadius: moderateScale(12),
        borderTopLeftRadius: moderateScale(12),
        alignItems: 'center',
      },
    })
  }
}

export function* getList () {
  try {
    const response = yield call(request.get, UrlAPI.contact)

    if (response?.status == 200 || response?.status == 201) {
      yield put(ContactTypes.getListSuccess(response?.data?.data))
    }
  } catch (err) {
    let e = err.data?.message?.toString() || 'Something when wrong!'
    yield put(ContactTypes.getListFailure())
    alertMessage(e, 'error')
  }
}

export function* addContact (data) {
  try {
    const response = yield call(request.post, UrlAPI.contact, data?.payload)

    if (response?.status == 200 || response?.status == 201) {
      yield put(ContactTypes.addContactSuccess())
      alertMessage(response.data?.message || 'Contact successfully added', 'success')
      yield call(getList);
    }
  } catch (err) {
    let e = err.data?.message?.toString() || 'Something when wrong!'
    yield put(ContactTypes.addContactFailure())
    alertMessage(e, 'error')
  }
}

export function* deleteContact (data) {
  try {
    const response = yield call(
      request.delete,
      UrlAPI.contact_id(data?.payload),
    )

    if (response?.status == 200 || response?.status == 201) {
      yield put(ContactTypes.deleteContactSuccess())
      alertMessage(response.data?.message || 'Contact successfully deleted', 'success')
      yield call(getList);
    }
  } catch (err) {
    let e = err.data?.message?.toString() || 'Something when wrong!'
    yield put(ContactTypes.deleteContactFailure())
    alertMessage(e, 'error')
  }
}

export function* updateContact (data) {
  const {id, body} = data?.payload

  try {
    const response = yield call(request.put, UrlAPI.contact_id(id), body)

    if (response?.status == 200 || response?.status == 201) {
      yield put(ContactTypes.updateContactSuccess())
      alertMessage(response.data?.message || 'Contact successfully updated', 'success')
      yield call(getList);
    }

  } catch (err) {
    let e = err.data?.message?.toString() || 'Something when wrong!'
    yield put(ContactTypes.updateContactFailure())
    alertMessage(e, 'error')
  }
}

export function* getDetailContact (data) {
  try {
    const response = yield call(request.get, UrlAPI.contact_id(data?.payload))

    if (response?.status == 200 || response?.status == 201) {
      yield put(ContactTypes.getDetailContactSuccess(response?.data?.data))
    }
  } catch (err) {
    let e = err.data?.message?.toString() || 'Something when wrong!'
    yield put(ContactTypes.getDetailContactFailure())
    alertMessage(e, 'error')
  }
}
