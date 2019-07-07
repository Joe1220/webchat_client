import React from 'react'
import { storiesOf } from '@storybook/react'

import LoginForm from './'
import UserStore from 'stores/UserStore'
import form from 'components/organisms/Forms/formSettings/LoginForm'

const stories = storiesOf('Components/Organisms', module)

stories.add('Forms/LoginForm', () => (
  <LoginForm userStore={new UserStore()} 
             form={form}
  />
))

export default undefined