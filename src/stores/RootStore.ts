import { RouterStore } from 'mobx-react-router'
import NavStore from './NavStore'
import UserStore from './UserStore'
import ModalStore from './ModalStore'
import ChatStore from './ChatStore'
import SocketStore from './SocketStore'

class RootStore {
  routing: any
  navStore: any
  userStore: any
  modalStore: any
  chatStore: any
  socketStore: any

  constructor() {
    this.routing = new RouterStore()
    this.navStore = new NavStore(this)
    this.userStore = new UserStore(this)
    this.modalStore = new ModalStore()
    this.chatStore = new ChatStore(this)
    this.socketStore = new SocketStore()
  }
}

export default new RootStore()