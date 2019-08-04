import React from 'react'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import { Input, Button } from 'components/atoms'

interface IMessageField {
  messageStore?: any
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

const MessageField: React.FC<IMessageField> = inject('messageStore')(observer(({ messageStore }) => {
  const { setMessage, sendMessage, message } = messageStore 
  return (
    <StyledField>
      <Input onChange={setMessage}
             value={message}
      />
      <Button onClick={sendMessage}>
        입력
      </Button>
    </StyledField>
  )
}))

export default MessageField