import { IUser } from 'services/user/type'

export interface IUserStore {
  currentUser: IUser
}

export interface IStore {
  user: IUserStore
}
