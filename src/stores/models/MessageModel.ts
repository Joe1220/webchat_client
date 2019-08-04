import { observable, action } from 'mobx'

import { IUserModel } from 'stores/models/UserModel'

export interface IMessage {
  id: number
  user: IUserModel
  message: string
}

class MessageModel {
  store
  @observable id
  @observable user
  @observable message

  constructor(store, room) {
    const { id, user, message="" } = room
    this.store = store
    this.id = id
    this.user = user
    this.message = message
  }
}

export default MessageModel