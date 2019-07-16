import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

import Button from './'

const stories = storiesOf('Components/Atoms', module)

stories
  .add('Button', () => (
    <Button lg={boolean('large button', false)}
            full={boolean('full width button', false)}
            grey={boolean('grey button', false)}
            onClick={() => null}
    >
      {text('text', 'test')}
    </Button>
  ) 
)

export default undefined