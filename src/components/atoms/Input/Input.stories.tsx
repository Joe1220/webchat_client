import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Input from './'

const stories = storiesOf('Components/Atoms', module)

stories
  .add('Input', () => (
    <Input  value={text('text', 'test')} 
            placeholder={text('placeholder', 'test placeholder')}
    />
  ))

export default undefined