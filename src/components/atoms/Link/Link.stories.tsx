import React from 'react'
import { storiesOf } from '@storybook/react'

import Link from './'

storiesOf('Components/Atoms', module)
  .add('Link', () => (
    <React.Fragment>
      <h4>Small Link</h4>
      <Link to='/' sm>Link</Link>
      <h4>Default Link</h4>
      <Link to='/'>Link</Link>
      <h4>Large Link</h4>
      <Link to='/' lg>Link</Link>
    </React.Fragment>
  ))
