import axios from 'axios'
import Config from 'react-native-config'

export const baseUrl = Config.BASE_URL

export const request = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
})

export const setClientToken = token => {
  request.defaults.headers.common.authorization = `Bearer ${token}`
}

export function isValidHttpUrl(string = '') {
  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
}