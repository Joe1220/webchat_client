import React from 'react'
import { storiesOf } from '@storybook/react'

import NavBar from './'


storiesOf('Components/organisms', module)
  .add('NavBar', () => (
    <React.Fragment>
      <h4>NavBar</h4>
      <NavBar />
    </React.Fragment>
  ))
