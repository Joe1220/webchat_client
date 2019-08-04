import React from 'react'
import { observer, inject } from 'mobx-react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Lobby, Room, Howmany } from 'containers'

interface IAuthenticatedRoutes {
  navStore?: any
  roomStore?: any
}
 
const AuthenticatedRoutes: React.FC<IAuthenticatedRoutes> = inject('navStore', 'roomStore')(observer(({ navStore }) => (
  <Switch>
    <Route exact path="/" component={Lobby} />
    <Route path="/how-many" component={Howmany} />
    <Route path="/room" component={Room} />
    <Redirect from="*" to="/" />
  </Switch>
)))

export default AuthenticatedRoutes
