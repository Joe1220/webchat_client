import { observable } from 'mobx'

class RoomModel {
  store
  @observable id
  @observable title
  @observable users
  @observable messages

  constructor(store, room) {
    const { id, title, users, messages } = room
    this.store = store
    this.id = id
    this.title = title
    this.users = users
    this.messages = messages
  }
}

export default RoomModel