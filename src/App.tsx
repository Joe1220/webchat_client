import React from 'react'
import { createBrowserHistory } from 'history'
import { Provider, observer } from 'mobx-react'
import { Switch, Router, Route } from 'react-router-dom'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'

import rootStore from 'stores/RootStore'
import { Home } from 'containers'

const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, rootStore.routing)

@observer
class App extends React.Component<{}> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <Provider {...RouterStore}>
        <Router history={history}>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
