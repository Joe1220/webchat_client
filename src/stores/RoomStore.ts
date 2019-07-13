import { persist } from 'mobx-persist'
import { observable, action } from 'mobx'

import { IUserModel } from 'stores/models/UserModel'
import RoomModel from './models/RoomModel'

class RoomStore {
  @observable root: any
  @persist('object') @observable activatedRoom: any
  @observable rooms: IUserModel[]
  constructor(root?) {
    this.root = root
    this.activatedRoom = new RoomModel(this, {})
    this.rooms = []
  }

  @action.bound
  roomOut() {
    this.activatedRoom = new RoomModel(this, {})
  }

  @action.bound
  async createRoom(title: string) {
    await this.root.socketStore.send('create_room', { 
      title, 
      user: this.root.userStore.currentUser 
    })
    await this.root.socketStore.once('create_room', this.setActivatedRoom)
  }

  @action.bound
  async enterRoom(roomId: number) {
    await this.root.socketStore.send('enter_room', {
      id: roomId,
      user: this.root.userStore.currentUser
    })
    this.root.navStore.routing.push(`/room/${roomId}`)
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

  @action.bound
  setActivatedRoom(value) {
    this.activatedRoom = new RoomModel(this, value)
    this.root.navStore.routing.push(`room/${value.id}`)

  }
}

export default RoomStore