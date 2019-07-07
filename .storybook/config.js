import React from 'react'
import { Provider } from 'mobx-react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { withKnobs } from '@storybook/addon-knobs'

import rootStore from '../src/stores/RootStore'
import theme from '../src/components/_settings/styles'

const StyledContainer = styled('div')`
  padding: 10px;
`

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach(req);
}

addDecorator((story) => {
  return (
    <Provider {...rootStore}>
      <ThemeProvider theme={theme}>
        <Router history={createBrowserHistory()}>
          <StyledContainer> 
            {story()}
          </StyledContainer>
        </Router>
      </ThemeProvider>
    </Provider>
  )
})

addDecorator(withKnobs)

configure(loadStories, module)