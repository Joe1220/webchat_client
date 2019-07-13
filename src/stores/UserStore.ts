import { observable, action } from 'mobx'
import { persist } from 'mobx-persist'

import UserModel, { IUserModel } from './models/UserModel'

export interface IUserStore {
  root: any
  socketStore: any
  isLogged: boolean
  currentUser: IUserModel
  signin?(name: string): void
}

class UserStore {
  @observable root: any
  @persist('object') @observable currentUser
  @persist @observable isLogged: boolean
  constructor(root?) {
    this.root = root
    this.isLogged = false
    this.currentUser = new UserModel(this)
  }

  @action.bound
  signin = async(nickname: string) => {
    this.isLogged = true
    await this.root.socketStore.send('login', ({
      nickname
    }))
    await this.root.socketStore.once('login', this.setField.bind(this, 'currentUser'))
  } 

  @action.bound
  setField (field: string, value: any) {
    this[field] = value
  }
}

export default UserStore

