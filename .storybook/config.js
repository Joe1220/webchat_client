import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/components/_settings/styles'

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach(req);
}

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module)