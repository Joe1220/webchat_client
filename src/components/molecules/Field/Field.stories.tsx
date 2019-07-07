import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Field from './'
import testForm from 'components/organisms/Forms/formSettings/LoginForm'

const stories = storiesOf('Components/Molecules', module)

stories.add('Field', () => (
  <React.Fragment>
    <h2>with Label</h2>
    <Field label={text('text', 'test')} 
           field={testForm.$('nickname')}
           {...testForm.$('nickname').bind()}
    />
    <h2>no Label</h2>
    <Field field={testForm.$('nickname')}
           {...testForm.$('nickname').bind()}
     />
  </React.Fragment>
))

export default undefined