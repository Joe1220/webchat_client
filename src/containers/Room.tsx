import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'

import { BaseTemplte } from 'components/templates'
import { RoomHead } from 'components/molecules'

interface IRoom {
  id: number
  roomStore?: any
}

@inject('roomStore')
@observer
export default class Room extends React.Component<IRoom> {
  @observable reaction

  componentDidMount() {
    this.props.roomStore.enterRoom(this.props.id)
  }

  componentWillUnmount() {
    this.props.roomStore.leaveRoom()
  }

  render() {
    const { activatedRoom } = this.props.roomStore
    console.log('checking: ', activatedRoom)
    return (
      <BaseTemplte>
        <RoomHead />
      </BaseTemplte>
    )
  }
}

