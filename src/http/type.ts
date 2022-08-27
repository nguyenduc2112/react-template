export interface IAxiosHeader {
  'Authorization'?: string
  'Access-Control-Allow-Origin'?: string
  'Accept': string
  'Content-Type': string
}

export interface HttpConfigType {
  httpConfig: {
    baseURL: string
  }
}

export enum EnumAuthErrCode {
  INVALID_REQUEST = 'INVALID_REQUEST',
  EXPIRED_TOKEN = 'EXPIRED_TOKEN',
  INVALID_REQUEST_OR_EXPIRED_TOKEN = 'INVALID_REQUEST_OR_EXPIRED_TOKEN',
  DID_NOT_COMPLETE_ACCOUNT = 'DID_NOT_COMPLETE_ACCOUNT'
}
