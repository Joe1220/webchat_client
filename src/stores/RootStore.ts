import { RouterStore } from 'mobx-react-router'
import NavStore from './NavStore'

class RootStore {
  routing: any
  navStore: any

  constructor() {
    this.routing = new RouterStore()
    this.navStore = new NavStore(this)
  }
}

export default new RootStore()