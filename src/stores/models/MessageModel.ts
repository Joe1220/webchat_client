import { observable } from 'mobx'

class MessageModel {
  store
  @observable id
  @observable user
  @observable message

  constructor(store, room) {
    const { id, user, message } = room
    this.store = store
    this.id = id
    this.user = user
    this.message = message
  }
}

export default MessageModel