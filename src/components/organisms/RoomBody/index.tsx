import React from 'react'
import { inject, observer } from 'mobx-react' 
import styled, { css } from 'styled-components'

import { P } from 'components/atoms'
import { RoomUserList } from 'components/molecules'

interface IRoomBody {
  messageStore?: any
  userStore?: any
  _me?: boolean
}

interface IStyledMessageBody {
  _me?: boolean
}

const StyledRoomBody = styled('div')`
  height: 100%;
  display: flex;
  flex-direction: row;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: 0.25rem;
  padding: ${props => props.theme.spaces.base};
`

const StyledMessagesBody = styled('div')`
  width: 100%;
  min-width: 340px;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spaces.base};
  align-items: left;
`

const StyledMessageBody = styled('span')<IStyledMessageBody>`
  display: flex;
  flex-direction: column;

  ${props => props._me && css`
    align-items: flex-end;
  `}
`

const RoomBody: React.FC<IRoomBody> = inject('messageStore', 'userStore')(observer(({ messageStore, userStore, _me }) => {
  const { messages } = messageStore
  const userId = userStore.currentUser.id
  return (
    <StyledRoomBody>
      <StyledMessagesBody>
        {messages.map((message, key) => (
          <StyledMessageBody key={key} _me={message.user.id === userId}>
            <P sm grey>{message.user.nickname}</P>
            <P>{message.message}</P>
          </StyledMessageBody>
        ))}
      </StyledMessagesBody>
      <RoomUserList />
    </StyledRoomBody>

  )
}))

export default RoomBody