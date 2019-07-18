import React from 'react'
import { inject, observer } from 'mobx-react' 
import styled from 'styled-components'

import { Button, P } from 'components/atoms'
import { Field } from 'components/molecules'

interface ILoginForm {
  userStore?: any
  form?: any
}

const StyledLoginForm = styled('form')`
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

const LoginForm: React.FC<ILoginForm> = inject('userStore')(observer(({ userStore, form }) => (
  <StyledLoginForm onSubmit={form.onSubmit}>
    <P lg thick white>SH's Web Chat</P>
    <br />
    <Field htmlFor={form.$('nickname').id}
           label={form.$('nickname').label}
           value={userStore.nickname} 
           field={form.$('nickname')}
           placeholder={form.$('nickname').placeholder}
           full
           {...form.$('nickname').bind()}
    />
    <br />
    <Button full
            onClick={form.onSubmit}
    >
      Submit
    </Button>
  </StyledLoginForm>
)))

export default LoginForm