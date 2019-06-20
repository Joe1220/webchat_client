import { RouteComponentProps } from 'react-router-dom'
 
class NavStore {
  routing: RouteComponentProps
  constructor(...args: any) {

    this.routing = args[0].routing
  }
}

export default NavStore


