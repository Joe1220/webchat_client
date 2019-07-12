import React from 'react'
import { inject, observer } from 'mobx-react' 
import styled from 'styled-components'

import { Button, P } from 'components/atoms'
import { Field } from 'components/molecules'
import Modal from 'components/organisms/Forms/formSettings/ModalForm'

interface IRegisterRoomForm {
  roomStore?: any
  form?: any
}

const StyledRegisterRoomForm = styled('form')`
  width: 450px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  padding: ${props => props.theme.spaces.lg};
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: ${props => props.theme.styles.borderRadius}px;
`

@Modal()
@inject('roomStore')
@observer
export default class RegisterRoomForm extends React.Component<IRegisterRoomForm> {

  render() {
    const { form, roomStore } = this.props
    return (
      <StyledRegisterRoomForm onSubmit={form.onSubmit}>
        <P lg thick blue>CREATE ROOM!</P>
        <br />
        <Field htmlFor={form.$('roomName').id}
               label={form.$('roomName').label}
               value={roomStore.roomName} 
               field={form.$('roomName')}
               placeholder={form.$('roomName').placeholder}
               {...form.$('roomName').bind()}
        />
        <br />
        <Button full
                onclick={form.onSubmit}
        >
          Submit
        </Button>
      </StyledRegisterRoomForm>
    )
  }
}