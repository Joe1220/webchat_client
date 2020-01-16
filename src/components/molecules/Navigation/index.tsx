import React from "react"
import { observer } from "mobx-react"

import { Nav, Link, A } from "components/atoms"

const Navigation: React.FC = observer(() => {
  return (
    <Nav>
      <li>
        <Link to="/">Lobby</Link>
      </li>
      <li>
        <A href="https://jshresume.joe12201.now.sh/">About</A>
      </li>
      <li>
        <Link to="/how-many">HOW MANY</Link>
      </li>
    </Nav>
  )
})

export default Navigation
