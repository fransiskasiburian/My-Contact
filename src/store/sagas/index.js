import {all, takeLatest, takeEvery} from 'redux-saga/effects'
import {Types as ContactTypes} from '../ducks'
import {addContact, deleteContact, getDetailContact, getList, updateContact} from './callAPI'

export default function* rootSaga () {
  return yield all([
    takeLatest(ContactTypes.GET_LIST_REQUEST, getList),
    takeLatest(ContactTypes.ADD_REQUEST, addContact),
    takeLatest(ContactTypes.DELETE_REQUEST, deleteContact),
    takeLatest(ContactTypes.UPDATE_REQUEST, updateContact),
    takeLatest(ContactTypes.GET_DETAIL_REQUEST, getDetailContact),
  ])
}
