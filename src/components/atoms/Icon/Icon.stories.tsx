import React from 'react'
import { storiesOf } from '@storybook/react'

import Img from './'
import imageSource from 'assets/images/logo.png'

storiesOf('Components/Atoms', module)
  .add('Image', () => (
    <React.Fragment>
      <h4>Img</h4>
      <Img  src={imageSource}
            width={'120px'} 
            height={'80px'} 
            alt={'beer list homepage logo'}
      />
    </React.Fragment>
  ))
