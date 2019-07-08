import { RouterStore } from 'mobx-react-router'
import NavStore from './NavStore'
import UserStore from './UserStore'
import ModalStore from './ModalStore'

class RootStore {
  routing: any
  navStore: any
  userStore: any
  modalStore: any

  constructor() {
    this.routing = new RouterStore()
    this.navStore = new NavStore(this)
    this.userStore = new UserStore()
    this.modalStore = new ModalStore()
  }
}

export default new RootStore()