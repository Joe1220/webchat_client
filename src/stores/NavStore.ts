import { computed, action } from 'mobx'
import queryString from 'query-string'
import { RouteComponentProps } from 'react-router-dom'
 
class NavStore {
  routing: RouteComponentProps
  constructor(...args: any) {
    this.routing = args[0].routing

  }

  @computed
  get _params() {
    return queryString.parse(this.routing.location.search) 
  }

  @computed
  get _location() {
    return this.routing.location.pathname
  }

  @action
  goDetailPage(pathname, id) {
    this.routing.history.push({
      pathname,
      search: `?id=${id}`
    })
  }
}

export default NavStore


