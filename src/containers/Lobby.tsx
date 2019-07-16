import React from 'react'
import { observer } from 'mobx-react'

import { Button } from 'components/atoms'
import RoomList from 'components/organisms/RoomList'
import { BaseTemplte } from 'components/templates'
import RegisterRoomForm from 'components/organisms/Forms/RegisterRoomForm'
import form from 'components/organisms/Forms/formSettings/RegisterRoom'

interface ILobby {
  RoomList?: React.ReactNode
}

const Lobby: React.FC<ILobby> = observer(() => (
  <BaseTemplte nav>
    <RegisterRoomForm form={form}>
      <Button>방 등록하기</Button>
    </RegisterRoomForm>
    <RoomList />
  </BaseTemplte>
))

export default Lobby