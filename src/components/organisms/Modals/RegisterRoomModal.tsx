import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import Modal from 'components/organisms/Forms/formSettings/ModalForm'

const Wrapper = styled('div')`
  width: 100px;
  height: 100px;

`

@Modal()
@observer
export default class RegisterRoomModal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>test</Wrapper>
    )
  }
}
