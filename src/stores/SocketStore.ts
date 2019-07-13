import { observable, action } from 'mobx'
import socketio from 'socket.io-client'

import { URL } from 'constants/urls'

class SocketStore {
  @observable socketClient: SocketIOClient.Socket
  constructor() {
    this.socketClient = socketio.connect(URL)

    this.socketClient.on('connection', (data) => {
      console.log('connection', data)
    })
  }

  @action.bound
  async send(channel: string = 'message', data: object = {}) {
    await this.socketClient.emit(channel, data)
  }

  @action.bound
  async on(channel: string = 'message', savingDataFunc: any = null) {
    await this.socketClient.on(channel, (data) => {
      savingDataFunc(data)
    })
  }

  @action.bound
  async once(channel: string = 'message', savingDataFunc: any = null) {
    await this.socketClient.once(channel, (data) => {
      savingDataFunc(data)
    })
  }
}

export default SocketStore

