import React from 'react'
import { storiesOf } from '@storybook/react'

import RoomItem from './'
import navStore from 'stores/NavStore'

const tempUsers = [{id: 0, nickname: 'test'}]
const tempId = 0
const tempTitle = 'test'

const stories = storiesOf('Components/Molecules', module)

stories.add('RoomItem', () => (
  <React.Fragment>
      <h2>Room 리스트의 각 item(Lobby페이지에서 출력)</h2>
      <RoomItem navStore={navStore} 
                users={tempUsers}
                id={tempId}
                title={tempTitle}
      />
  </React.Fragment>
))

export default undefined