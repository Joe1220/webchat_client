import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Components/Atoms', module)
  .add('Nav', () => (
    <React.Fragment>
      <h4>Nav내에 Link Component를 묶어 Navigation molecules Component가 생성됩니다.</h4>
      <h4>Navigation 참조 부탁드립니다..</h4>
    </React.Fragment>

  ))
