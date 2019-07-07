import React from 'react'

import { LoginForm } from 'components/organisms'
import { ModalTemplate } from 'components/templates'
import img from 'assets/images/background.jpg'
import form from 'components/organisms/Forms/formSettings/LoginForm'

const Login: React.FC = () => {
  return (
    <ModalTemplate src={`url(${img})`}>
      <LoginForm form={form} />
    </ModalTemplate>
  )
}

export default Login