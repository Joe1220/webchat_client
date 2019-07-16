import { observable } from 'mobx'

import { IUserModel } from 'stores/models/UserModel'
import { IMessage } from 'stores/models/MessageModel'

export interface IRoomModel {
  id: number
  title: string
  users: IUserModel[]
  messages: IMessage[]
}

class RoomModel {
  store
  @observable id
  @observable title
  @observable users
  @observable messages

  constructor(store, datum) {
    const { id = 0, title = '', users = [], messages = [] } = datum
    this.store = store
    this.id = id
    this.title = title
    this.users = users
    this.messages = messages
  }
}

export default RoomModel