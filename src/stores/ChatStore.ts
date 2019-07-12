import { observable, action } from 'mobx'

import { IUserStore } from 'stores/UserStore'

interface IRoom {
  id: number
  title: string
  users: IUserStore[]
  messages: IMessage[]
}

interface IMessage {
  id: number
  user: IUserStore
  message: string
}

class ChatStore {
  @observable root: any
  @observable activatedRoom: IRoom | null
  @observable rooms: IRoom[]
  constructor(root?) {
    this.root = root
    this.activatedRoom = null
    this.rooms = []
  }

  @action.bound
  setActivatedRoom(room: IRoom) {
    this.activatedRoom = room
  }

  @action.bound
  roomOut() {
    this.activatedRoom = null
  }

  @action.bound
  async createRoom(title: string) {
    await this.root.socketStore.send('create_room', { title })
    this.getRooms()
  }

  @action.bound
  async getRooms() {
    await this.root.socketStore.send('get_rooms')
    await this.root.socketStore.on('get_rooms', this.serSocketValue.bind(this, 'rooms'))
    return this.rooms
  }

  @action.bound
  serSocketValue(field, value) {
    this[field] = value
  }
}

export default ChatStore