import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable, reaction } from 'mobx'

import { BaseTemplte } from 'components/templates'
import { RoomHead, MessageField } from 'components/molecules'
import { RoomBody } from 'components/organisms'

interface IRoom {
  id: number
  roomStore?: any
  messageStore?: any
  navStore?: any
}

@inject('roomStore', 'navStore')
@observer
export default class Room extends React.Component<IRoom> {
  @observable isNotRoom

  constructor(props) {
    super(props)

    reaction(
      () => props.roomStore.isNotRoom,
      (isNotExist) => {
        if(isNotExist) {
          props.roomStore.leaveRoom()
        }
      }
    )
  }

  componentDidMount() {
    this.props.roomStore.enterRoom(Number(this.props.navStore._params.id)) 
  }

  componentWillUnmount() {
    this.props.roomStore.leaveRoom()
  }

  render() {
    if(this.isNotRoom) {
      return <div>Not room</div>
    }
    return (
      <BaseTemplte HeadComponent={RoomHead}
                   Footer={MessageField}
      >
        <RoomBody />
      </BaseTemplte>
    )
  }
}

