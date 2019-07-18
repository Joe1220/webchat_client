import { persist } from 'mobx-persist'
import { observable, action } from 'mobx'
import _ from 'lodash'

import { IUserModel } from 'stores/models/UserModel'
import RoomModel from './models/RoomModel'

class RoomStore {
  @observable root: any
  @persist('object') @observable activatedRoom: any
  @observable rooms: IUserModel[]
  @observable isNotRoom: boolean
  constructor(root?) {
    this.root = root
    this.activatedRoom = new RoomModel(this, {})
    this.rooms = []
    this.isNotRoom = false
  }

  @action.bound
  async enterLobby() {
    await this.root.socketStore.send('enter_lobby')

    await this.root.socketStore.on('get_rooms', this.setRooms)
  }

  @action.bound
  async leaveLobby() {
    // 로그아웃
    this.root.userStore.logout()
    await this.root.socketStore.emit('leave_lobby', {
      id: this.root.userStore.currentUser.id
    })
    
    await this.root.socketStore.off('get_rooms')
  }

  @action.bound
  async createRoom(title: string) {
    await this.root.socketStore.send('create_room', { 
      title, 
      user: this.root.userStore.currentUser 
    })
    await this.root.socketStore.once('in_room', this.setActivatedRoomAndGoPage)
  }

  @action.bound
  async enterRoom(roomId: number) {
    await this.root.socketStore.send('enter_room', {
      id: roomId,
      user: this.root.userStore.currentUser
    })

    await this.root.socketStore.on('in_room', this.setActivatedRoom)

    // 방이 존재하지 않을 때 에러처리..
    await this.root.socketStore.on('not_room', this.setActivatedRoom)
  } 

  @action.bound
  async leaveRoom() {
    await this.root.socketStore.send('leave_room', {
      id: this.activatedRoom.id,
      user: this.root.userStore.currentUser
    })
    await this.root.socketStore.off('in_room')
      .then(() => {
        this.setActivatedRoom({})
        this.root.navStore.routing.push('/')
      })
  }

  @action.bound
  setField (field: string, value: any) {
    this[field] = value
  }

  @action.bound
  setActivatedRoomAndGoPage(value) {
    this.activatedRoom = new RoomModel(this, value)
    //메세지 호출
    this.root.messageStore.getMessages(this.activatedRoom.messages)

    this.root.navStore.goDetailPage('room', value.id)
  }

  // ENTER ROOM 일 때, 방 id가 서버에 존재하지 않을 시 
  //isNotRoom 을 true로 전환(Room 페이지에서 바로 leaveRoom 실행)
  @action.bound
  setActivatedRoom(value) {
    if(!value.id || !value || value.id === undefined) {
      return this.isNotRoom = true
    }
    this.activatedRoom = new RoomModel(this, value)
    //메세지 호출
    this.root.messageStore.getMessages(this.activatedRoom.messages)
  }

  @action.bound
  setRooms(rooms) {
    this.rooms = rooms.map(room => new RoomModel(this, room))
  }
}

export default RoomStore