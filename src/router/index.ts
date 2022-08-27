import { lazy } from 'react'

import { IRouterItem } from './type'
import { ROUTER_NAME_LIST } from './enum'

export const routers: IRouterItem[] = [
  {
    path: '/',
    component: lazy((): Promise<any> => import('pages/Dashboard')),
    name: ROUTER_NAME_LIST.DASHBOARD
  },
  {
    path: '/login',
    component: lazy((): Promise<any> => import('pages/Login')),
    name: ROUTER_NAME_LIST.LOGIN
  }
]
