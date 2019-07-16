import React from 'react'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import { P } from 'components/atoms'

import { IUserModel } from 'stores/models/UserModel'

interface IRoomItem {
  navStore: any
  title: string
  id: number,
  users: Array<IUserModel> 
}

interface IStyledRoomItem {
  onClick?: (e: any) => void
}

const StyledRoomItem = styled('div')<IStyledRoomItem>`
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: 0.25rem;
  padding: ${props => props.theme.spaces.base};
  margin-bottom: ${props => props.theme.spaces.base};
`

const RoomItem: React.FC<IRoomItem> = inject('navStore')(observer(({ navStore, title, id, users }) => (
  <StyledRoomItem onClick={() => navStore.goDetailPage('room', id)}>
    <P blue 
       lg
       overflowing
    >
      {title}
    </P> 
    <P>참여 : {users ? users.length : 0}명</P>
  </StyledRoomItem>
)))

export default RoomItem