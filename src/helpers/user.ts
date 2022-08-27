import store from 'store'
import { IStore } from 'store/type'
import { IUser } from 'services/user/type'

export const getUser: any = (): IUser | null => {
  const state: IStore = store.getState()

  return state.user.currentUser
}
