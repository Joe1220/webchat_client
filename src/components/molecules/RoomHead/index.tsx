import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

import { P, Button } from 'components/atoms'

const StyledRoomHead = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

interface IRoomHead {
  roomStore?: any
}

const RoomHead: React.FC<IRoomHead> = inject('roomStore')(observer(({ roomStore }) => {
  const { title } = roomStore.activatedRoom
  const { leaveRoom } = roomStore
  return (
    <StyledRoomHead>
      <P blue lg overflowing>{title}</P>
      <Button grey onClick={leaveRoom} >
        나가기
      </Button>
    </StyledRoomHead>
  )
}))

export default RoomHead