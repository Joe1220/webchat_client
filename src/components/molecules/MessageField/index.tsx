import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { Input, Button } from 'components/atoms'

interface IMessageField {
  value?: string;
  field?: any;
  onChange?: any;
  onSubmit?: any;
  placeholder?: string;
  inputProps?: any;
}

const StyledField = styled('div')`
  display: flex;
  height: auto;
  width: 100%;
  margin-bottom: ${props => props.theme.spaces.base};

  & > Button {
    width: auto;
  }
`

const MessageField: React.FC<IMessageField> = observer(({ onSubmit, ...inputProps }) => (
  <StyledField>
    <Input {...inputProps} />
    <Button onClick={onSubmit}>
      입력
    </Button>
  </StyledField>
))

export default MessageField