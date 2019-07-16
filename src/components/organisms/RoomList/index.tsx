import React from 'react'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'

import { LoadingDecorator } from 'components/organisms'
import { RoomItem } from 'components/molecules'
import rootStore from 'stores/RootStore'

const StyledRoomList = styled('div')`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 130px;
  grid-gap: ${props => props.theme.spaces.lg};
  box-sizing: border-box;
  margin-top: ${props => props.theme.spaces.lg};

  @media only screen and (max-width: 768px){
    display: inline-block;
    align-items: center;
    justify-content: center;
  };
`

interface IRoomList {
  roomStore?: any
}

@LoadingDecorator({ fetchData: rootStore.roomStore.enterLobby, closeData: () => rootStore.roomStore.leaveLobby })
@inject('roomStore')
@observer
export default class RoomList extends React.Component<IRoomList> {

  render() {
    const { rooms } = this.props.roomStore
    return (
      <StyledRoomList>
        {rooms && rooms.map((room, index) => {
          return <RoomItem {...room} key={index} />
        })}
      </StyledRoomList>
    )
  }
}

