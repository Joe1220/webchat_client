import { observable, action } from 'mobx'

import { IUserModel } from 'stores/models/UserModel'

interface IRoom {
  id: number
  title: string
  users: IUserModel[]
  messages: IMessage[]
}

interface IMessage {
  id: number
  user: IUserModel
  message: string
}

class RoomStore {
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
    await this.root.socketStore.send('create_room', { 
      title, 
      user: this.root.userStore.currentUser 
    })
   
    this.getRooms()
  }

  @action.bound
  async getRooms() {
    await this.root.socketStore.send('get_rooms')
    await this.root.socketStore.on('get_rooms', this.setField.bind(this, 'rooms'))
    return this.rooms
  }

  @action.bound
  setField (field: string, value: any) {
    this[field] = value
  }
}

export default RoomStore