import { observable, action } from 'mobx'
import { persist } from 'mobx-persist'

export interface IUserStore {
  nickname?: string
  isLogged: false
  signin?(name: string): void
}

class UserStore {
  @persist @observable nickname: string | null
  @persist @observable isLogged: boolean
  constructor() {
    this.nickname = null
    this.isLogged = false
  }

  @action.bound
  signin = (name: string) => {
    this.nickname = name
    this.isLogged = true
  } 

  @action.bound
  setField (field: string, value: string) {
    this[field] = value
  }
}

export default UserStore

