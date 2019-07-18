import React from 'react'
import { inject, observer } from 'mobx-react' 
import styled from 'styled-components'

import { P } from 'components/atoms'

interface IRoomUserList {
  roomStore?: any
}

const StyledContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 120px;
  align-items: center;
  padding: ${props => props.theme.spaces.base};
  align-items: left;
  border-left: solid 1px grey;

  
`

const StyledUserList = styled('div')`
  margin-top: ${props => props.theme.spaces.base};
`

const RoomUserList: React.FC<IRoomUserList> = inject('roomStore')(observer(({ roomStore }) => {
  const { users } = roomStore.activatedRoom
  return (
    <StyledContainer>
      <P blue>참여유저 : {users.length}</P>
      <StyledUserList>
        {users.map((user, key) => (
          <P key={key}>{user.nickname}</P>
        ))}
      </StyledUserList>
    </StyledContainer>
  )
}))

export default RoomUserList