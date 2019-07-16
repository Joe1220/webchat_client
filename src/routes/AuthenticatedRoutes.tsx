import React from 'react'
import { observer, inject } from 'mobx-react'

import { Lobby, Room, NoMatch } from 'containers'

interface IAuthenticatedRoutes {
  navStore?: any
}
 
const AuthenticatedRoutes: React.FC<IAuthenticatedRoutes> = inject('navStore')(observer(({ navStore }) => {
  const { id } = navStore._params
  if(!id || id === undefined) {
    return <Lobby />
  } else if(id) {
    return <Room id={id} />
  } else {
    return <NoMatch />
  }
}))

export default AuthenticatedRoutes
