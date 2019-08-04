import { observable, action } from 'mobx'

import MessageModel, { IMessage } from './models/MessageModel'

class RoomStore {
  @observable root: any
  @observable message
  @observable messages: IMessage[]
  constructor(root?) {
    this.root = root
    this.message = ""
    this.messages = []
  }

  // id는 roomId
  @action.bound
  async sendMessage() {
    await this.root.socketStore.send('message', {
      userId: this.root.userStore.currentUser.id,
      roomId: this.root.roomStore.activatedRoom.id,
      message: this.message
    })
    this.message = new MessageModel(this, {})
  }

//실체 호출은 roomStore에서 activatedRoom 설정 시 호출
@action.bound
async getMessages(messages) {
  this.messages = messages.map(message => new MessageModel(this, message))
}
  @action.bound
  setMessage(e) {
    console.log('check field and value: ', this.message)
    this.message = e.target.value
  }

  @action.bound
  setField (field: string, value: any) {
    this[field] = value
  }
}

export default RoomStore