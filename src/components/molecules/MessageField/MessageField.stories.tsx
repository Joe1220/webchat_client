import React from 'react'
import { storiesOf } from '@storybook/react'

import MessageField from './'
import testForm from 'components/organisms/Forms/formSettings/LoginForm'

const stories = storiesOf('Components/Molecules', module)

stories.add('MessageField', () => (
  <React.Fragment>
    <MessageField field={testForm.$('nickname')}
                  {...testForm.$('nickname').bind()}
     />
  </React.Fragment>
))

export default undefined