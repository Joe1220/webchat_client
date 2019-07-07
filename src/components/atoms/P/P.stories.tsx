import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

import P from './'

const stories = storiesOf('Components/Atoms', module)

stories
  .add('Text', () => (
    <React.Fragment>
      <P  sm={boolean('small text', false)}
          lg={boolean('large text', false)}
          blue={boolean('blue text', false)}
      >
        {text('text', 'test text')}
      </P>
    </React.Fragment>
  ))

export default undefined