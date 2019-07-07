import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

import Label from './'

const stories = storiesOf('Components/Atoms', module)

stories.add('Label', () => (
  <React.Fragment>
    <Label  sm={boolean('small label', false)}
            lg={boolean('big label', false)}
            blue={boolean('blue label', false)}
    >
      {text('label', 'test label')}
    </Label>
  </React.Fragment>
))

export default undefined