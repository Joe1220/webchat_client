import React from 'react'
import { observer, inject } from 'mobx-react'

import { Lobby, Room, NoMatch } from 'containers'

interface IAuthenticatedRoutes {
  navStore?: any
  roomStore?: any
}
 
const AuthenticatedRoutes: React.FC<IAuthenticatedRoutes> = inject('navStore', 'roomStore')(observer(({ navStore }) => {
  const { id } = navStore._params
  if(navStore._location === '/') {
    return <Lobby />
  } else if(id) {
    return <Room id={id} />
  } else {
    return <NoMatch />
  }
}))

export default AuthenticatedRoutes
