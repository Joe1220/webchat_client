import React from 'react'
import { storiesOf } from '@storybook/react'

import A from './'

storiesOf('Components/Atoms', module)
  .add('A', () => (
    <React.Fragment>
      <h4>Small A</h4>
      <A href='/' sm>A</A>
      <h4>Default A</h4>
      <A href='/'>A</A>
      <h4>Large A</h4>
      <A href='/' lg>A</A>
    </React.Fragment>
  ))
