import { observable } from 'mobx'
 
class NavStore {
  routing: any
  constructor(...args: any) {

    this.routing = args[0].routing
  }
}

export default NavStore


