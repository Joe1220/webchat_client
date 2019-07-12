import { observable, action } from 'mobx'
import { persist } from 'mobx-persist'

export interface IUserStore {
  root: any
  socketStore: any
  nickname?: string
  isLogged: boolean
  signin?(name: string): void
}

class UserStore {
  @observable root: any
  @persist @observable nickname: string | null
  @persist @observable isLogged: boolean
  constructor(root?) {
    this.root = root
    this.nickname = null
    this.isLogged = false
  }

  @action.bound
  signin = async(name: string) => {
    this.nickname = name
    this.isLogged = true
    await this.root.socketStore.send('login', ({
      nickname: this.nickname
    }))
  } 

  @action.bound
  setField (field: string, value: string) {
    this[field] = value
  }
}

export default UserStore

