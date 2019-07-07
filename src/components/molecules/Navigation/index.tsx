import React from 'react'
import { observer } from 'mobx-react'

import Nav from 'components/atoms/Nav'
import Link from 'components/atoms/Link'

const Navigation: React.FC = observer(() => {
  return (
    <Nav>
      <li><Link to='/'>Lobby</Link></li>
      <li><Link to='/about'>About</Link></li>
    </Nav>
  )
})

export default Navigation