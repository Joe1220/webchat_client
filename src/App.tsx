import React from 'react'
import { createBrowserHistory } from 'history'
import { Provider, observer } from 'mobx-react'
import { Switch, Router, Route } from 'react-router-dom'
import { syncHistoryWithStore } from 'mobx-react-router'
import { ThemeProvider } from 'styled-components'

import rootStore from 'stores/RootStore'
import { Home, Login, NoMatch } from 'containers'
import themes from 'components/_settings/styles'

const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, rootStore.routing)

@observer
class App extends React.Component {
  constructor(props: any) {
    super(props)
  }

  render() {
    const { isLogged } = rootStore.userStore
    return (
      <Provider {...rootStore}>
        <ThemeProvider theme={themes}>
          <Router history={history}>
            {isLogged ? (
              <Switch>
                <Route path='/' component={Home} />
                <Route component={NoMatch} />
              </Switch>
            ) : (
              <Switch>
                <Route path='/' component={Login} />
                <Route component={NoMatch} />
              </Switch>
            )}
          </Router>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App
