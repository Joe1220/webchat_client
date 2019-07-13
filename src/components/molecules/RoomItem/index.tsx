import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { P } from 'components/atoms'

interface IRoomItem {
  title: string
  id: number
}

const StyledRoomItem = styled('div')`
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: 0.25rem;
  padding: ${props => props.theme.spaces.base};
  margin-bottom: ${props => props.theme.spaces.base};
`

const RoomItem: React.FC<IRoomItem> = observer(({ title, id, ...inputProps }) => (
  <StyledRoomItem>
    <P blue lg overflow>{title}</P>
    <P>test</P>
  </StyledRoomItem>
))

export default RoomItem