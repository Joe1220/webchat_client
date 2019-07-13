import React from 'react'
import { storiesOf } from '@storybook/react'

import RegisterRoomForm from './'
import rootStore from 'stores/RootStore'
import form from 'components/organisms/Forms/formSettings/RegisterRoom'

const stories = storiesOf('Components/Organisms', module)

stories.add('Forms/RegisterRoomForm', () => (
  <RegisterRoomForm roomStore={rootStore.roomStore} 
                    form={form}
  />
))

export default undefined