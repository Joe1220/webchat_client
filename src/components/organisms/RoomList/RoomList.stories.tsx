import React from 'react'
import { storiesOf } from '@storybook/react'

import RoomList from './'

storiesOf('Components/organisms', module)
  .add('RoomList', () => (
    <React.Fragment>
      <h4>NavBar</h4>
      <RoomList />
    </React.Fragment>
  ))
