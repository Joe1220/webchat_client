import { observable, action } from 'mobx'

import { IUserModel } from 'stores/models/UserModel'
import { IMessage } from 'stores/models/MessageModel'

export interface IRoomModel {
  id: number | null
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
    const { id = null, title = '', users = [], messages = [] } = datum
    this.store = store
    this.id = id
    this.title = title
    this.users = users
    this.messages = messages
  }

  @action.bound
  async remove() {
    this.store.rooms.remove(this)
  }
}

export default RoomModel