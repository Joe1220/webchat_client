import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Field from './'

const stories = storiesOf('Components/Atoms', module)

stories.add('Field', () => (
  <React.Fragment>
    <h2>with Label</h2>
    <Field label={text('text', 'test')} />
    <h2>no Label</h2>
    <Field />
  </React.Fragment>
))

export default undefined