import React from 'react'
import { storiesOf } from '@storybook/react'

import Navigation from './'

storiesOf('Components/Molecules', module)
  .add('Navigation', () => (
    <React.Fragment>
      <h4>Navigation</h4>
      <Navigation />
    </React.Fragment>
  ))
