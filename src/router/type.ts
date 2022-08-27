import { ROUTER_NAME_LIST } from './enum'

export interface IRouterItem {
  component: any
  path: string
  isPrivate?: boolean
  // accessWhiteList?: USER_ROLES[]
  validate?: any
  // layout: LAYOUT_NAME
  // adminActiveMenuKey?: ACTIVE_KEY
  name: ROUTER_NAME_LIST
}
