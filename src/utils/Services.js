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