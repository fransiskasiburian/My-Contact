import {combineReducers} from 'redux'

export const Types = {
  // List Contact
  GET_LIST_REQUEST: 'GET_LIST_REQUEST',
  GET_LIST_SUCCESS: 'GET_LIST_SUCCESS',
  GET_LIST_FAILURE: 'GET_LIST_FAILURE',

  // Add Contact
  ADD_REQUEST: 'ADD_REQUEST',
  ADD_SUCCESS: 'ADD_SUCCESS',
  ADD_FAILURE: 'ADD_FAILURE',

  // Delete Contact
  DELETE_REQUEST: 'DELETE_REQUEST',
  DELETE_SUCCESS: 'DELETE_SUCCESS',
  DELETE_FAILURE: 'DELETE_FAILURE',

  // Update Contact
  UPDATE_REQUEST: 'UPDATE_REQUEST',
  UPDATE_SUCCESS: 'UPDATE_SUCCESS',
  UPDATE_FAILURE: 'UPDATE_FAILURE',

  // Get Detail Contact
  GET_DETAIL_REQUEST: 'GET_DETAIL_REQUEST',
  GET_DETAIL_SUCCESS: 'GET_DETAIL_SUCCESS',
  GET_DETAIL_FAILURE: 'GET_DETAIL_FAILURE',

  CLEAR_STATUS: 'CLEAR_STATUS',
}

const initialState = {
  loadingList: false,
  errorList: false,
  list: [],

  loadingAdd: false,
  errorAdd: false,
  successAdd: false,

  loadingDelete: false,
  errorDelete: false,
  successDelete: false,

  loadingUpdate: false,
  errorUpdate: false,
  successUpdate: false,

  loadingDetail: false,
  errorDetail: false,
  detail: {},
}

export const Creators = {
  // List Contact
  getListRequest: () => ({
    type: Types.GET_LIST_REQUEST,
  }),
  getListSuccess: payload => ({
    type: Types.GET_LIST_SUCCESS,
    payload,
  }),
  getListFailure: () => ({
    type: Types.GET_LIST_FAILURE,
  }),

  // Add Contact
  addContactRequest: payload => ({
    type: Types.ADD_REQUEST,
    payload,
  }),
  addContactSuccess: () => ({
    type: Types.ADD_SUCCESS,
  }),
  addContactFailure: () => ({
    type: Types.ADD_FAILURE,
  }),

  // Delete Contact
  deleteContactRequest: payload => ({
    type: Types.DELETE_REQUEST,
    payload,
  }),
  deleteContactSuccess: () => ({
    type: Types.DELETE_SUCCESS,
  }),
  deleteContactFailure: () => ({
    type: Types.DELETE_FAILURE,
  }),

  // Update Contact
  updateContactRequest: payload => ({
    type: Types.UPDATE_REQUEST,
    payload,
  }),
  updateContactSuccess: () => ({
    type: Types.UPDATE_SUCCESS,
  }),
  updateContactFailure: () => ({
    type: Types.UPDATE_FAILURE,
  }),

  // Get Detail Contact
  getDetailContactRequest: payload => ({
    type: Types.GET_DETAIL_REQUEST,
    payload,
  }),
  getDetailContactSuccess: payload => ({
    type: Types.GET_DETAIL_SUCCESS,
    payload,
  }),
  getDetailContactFailure: () => ({
    type: Types.GET_DETAIL_FAILURE,
  }),

  clearStatus: () => ({
    type: Types.CLEAR_STATUS,
  }),
}

function customData(data) {
  const newData = data.sort((a, b) => {
    if (a.firstName < b.firstName) return -1;
    return a.firstName > b.firstName ? 1 : 0;
  });

  let finalData = [];
  let stickeyIndex = [];
  newData.forEach((name, i) => {
    if (
      i == 0 ||
      name.firstName.substr(0, 1) != newData[i - 1]?.firstName?.substr(0, 1)
    ) {
      stickeyIndex.push(i + stickeyIndex.length);
      finalData.push({
        id: i.toString() + 'head',
        name: name?.firstName?.substr(0, 1).toUpperCase(),
        type: 'head',
        imageUrl: 'N/A',
      });
    }
    finalData.push({
      id: i.toString() + 'name',
      firstName: name?.firstName,
      lastName: name?.lastName,
      name: `${name?.firstName} ${name?.lastName}`,
      age: name?.age,
      type: 'name',
      imageUrl: name?.photo?.toString(),
      personId: name?.id,
    });
  });

  return {finalData, stickeyIndex};
}


const ducks = (state = initialState, action) => {
  switch (action.type) {
    // List Contact
    case Types.GET_LIST_REQUEST:
      return {
        ...state,
        loadingList: true,
        successAdd: false,
        successDelete: false,
        successUpdate: false,
        errorList: false,
      }
    case Types.GET_LIST_SUCCESS:
      return {
        ...state,
        loadingList: false,
        errorList: false,
        list: customData(action?.payload),
      }
    case Types.GET_LIST_FAILURE:
      return {
        ...state,
        loadingList: false,
        errorList: true,
      }

    // Add Contact
    case Types.ADD_REQUEST:
      return {
        ...state,
        loadingAdd: true,
        errorAdd: false,
        successAdd: false,
      }
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loadingAdd: false,
        errorAdd: false,
        successAdd: true,
      }
    case Types.ADD_FAILURE:
      return {
        ...state,
        loadingAdd: false,
        errorAdd: true,
        successAdd: false,
      }

    // Delete Contact
    case Types.DELETE_REQUEST:
      return {
        ...state,
        loadingDelete: true,
        errorDelete: false,
        successDelete: false,
      }
    case Types.DELETE_SUCCESS:
      return {
        ...state,
        loadingDelete: false,
        errorDelete: false,
        successDelete: true,
      }
    case Types.DELETE_FAILURE:
      return {
        ...state,
        loadingDelete: false,
        errorDelete: true,
        successDelete: false,
      }

    // Update Contact
    case Types.UPDATE_REQUEST:
      return {
        ...state,
        loadingUpdate: true,
        errorUpdate: false,
        successUpdate: false,
      }
    case Types.UPDATE_SUCCESS:
      return {
        ...state,
        loadingUpdate: false,
        errorUpdate: false,
        successUpdate: true,
      }
    case Types.UPDATE_FAILURE:
      return {
        ...state,
        loadingUpdate: false,
        errorUpdate: true,
        successUpdate: false,
      }

    // Get Detail Contact
    case Types.GET_DETAIL_REQUEST:
      return {
        ...state,
        loadingDetail: true,
        errorDetail: false,
        detail: {},
      }
    case Types.GET_DETAIL_SUCCESS:
      return {
        ...state,
        loadingDetail: false,
        errorDetail: false,
        detail: action?.payload,
      }
    case Types.GET_DETAIL_FAILURE:
      return {
        ...state,
        loadingDetail: false,
        errorDetail: true,
        detail: {},
      }

    case Types.CLEAR_STATUS:
      return {
        ...state,
        successAdd: false,
        successDelete: false,
        successUpdate: false,

        errorAdd: false,
        errorDelete: false,
        errorUpdate: false,
        errorList: false,
        errorDetail: false,
      }

    default:
      return state
  }
}

export default combineReducers({
  ducks,
})
