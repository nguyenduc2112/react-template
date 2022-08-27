import { env } from 'environments'
import axios, { AxiosRequestConfig, CancelTokenSource } from 'axios'
import { authHeader, isExpiredJWT, serialize } from './helper'
import UserService from 'services/user'

const initialHeaders: any = authHeader()

// axiosRetry.attach()
const http: any = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: initialHeaders
})

export const cancelHttp: CancelTokenSource = axios.CancelToken.source()

const getNewTokenIfExpired: any = (): string => {
  return UserService.getNewJWTTokenIfExpired()
}

http.fetch = (url: string, params?: any): Promise<any> => {
  const query: string = serialize(params || {})
  return http.get(`${url}${query}`)
}

http.interceptors.request.use(async (config: AxiosRequestConfig): Promise<any> => {
  const newToken: string = await getNewTokenIfExpired()

  config.headers = {
    ...config.headers,
    Authorization: newToken ? `Bearer ${newToken}` : ''
  }
  config.baseURL = env.apiUrl + '/api/v1/'

  return config
})

/*
const refreshToken: any = async (): Promise<any> => {
  const loggedInUser: UserType | null = getUser()

  return await http
    .post('/refresh-token', {
      refresh_token: loggedInUser?.jwt?.refreshToken
    })
    .then((response: any): any => {
      http.headers = authHeader(response.data.jwt.token)
      AuthService.updateUserAfterRefreshJWT(response.data)

      return response
    })
}
*/

http.interceptors.response.use(
  (response: any): any => {
    return response
  },
  async (err: any): Promise<any> => {
    const isExpiredTime: boolean = isExpiredJWT(err)
    if (isExpiredTime) {
      // await refreshToken()
    }

    return err
  }
)

/*
http.interceptors.response.use(
  (response: any): any => {
    return Promise.resolve(response)
  },
  (err: any): any => {
    if (isExpiredJWT(err)) {
      cancelHttp.cancel('The request was canceled')
    }

    return Promise.reject(err)
  }
)
*/

export { http }
