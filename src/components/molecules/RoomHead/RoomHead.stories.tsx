import React from 'react'
import { storiesOf } from '@storybook/react'

import RoomHead from './'
import rootStore from 'stores/RootStore'

const stories = storiesOf('Components/Molecules', module)

stories.add('RoomHead', () => (
  <React.Fragment>
      <h2>Room 페이지 상단(title은 mobx store에서 관리하기 때문에 지금은 빈칸)</h2>
      <RoomHead roomStore={rootStore.roomStore} />
  </React.Fragment>
))

export default undefined