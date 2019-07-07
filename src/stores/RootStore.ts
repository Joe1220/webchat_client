import { RouterStore } from 'mobx-react-router'
import NavStore from './NavStore'
import UserStore from './UserStore'

class RootStore {
  routing: any
  navStore: any
  userStore: any

  constructor() {
    this.routing = new RouterStore()
    this.navStore = new NavStore(this)
    this.userStore = new UserStore()
  }
}

export default new RootStore()