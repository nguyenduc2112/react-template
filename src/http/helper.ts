// import { IUser } from 'services/user/type'
import { IObject } from 'types/object'
import { IAxiosHeader, EnumAuthErrCode } from './type'

// import UserService from 'services/user/user.service'

export const serialize: any = (obj: IObject, hasQuestionSign: boolean = true): string => {
  if (Object.keys(obj).length < 1) {
    return ''
  }

  const str: any = []
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
  }

  const prefix: string = hasQuestionSign ? '?' : ''

  return prefix + str.join('&')
}

export function authHeader(newToken?: string): IAxiosHeader {
  // const userLocalStorage: string | null = localStorage.getItem('user') || '{}'
  // const user: IUser = userLocalStorage && userLocalStorage !== 'undefined' ? JSON.parse(userLocalStorage) : null

  // const token: string | undefined = user?.jwt?.token || newToken
  const token: string = ''

  if (newToken || token) {
    return {
      'Authorization': `Bearer ${newToken || token}`,
      // 'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  } else {
    return {
      // 'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
}

export const isExpiredJWT: any = (errResponse: any): boolean => {
  // const res: any = errResponse?.response

  // return res?.status === 401 && res?.data?.errorCode === EnumAuthErrCode.INVALID_REQUEST_OR_EXPIRED_TOKEN
  return false
}
