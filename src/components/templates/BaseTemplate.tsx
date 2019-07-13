import React from 'react'
import styled, { css } from 'styled-components'
import { observer } from 'mobx-react'

import { NavBar } from 'components/organisms'

const StyledBaseTemplate = styled('div')`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  min-height: 100vh;
  box-sizing: border-box;
`

const StyledContent = styled('div')`
  width: calc(100% - 40px);
  box-sizing: border-box;
  padding: ${props => props.theme.spaces.lg};
  min-width: 920px;
`


export default observer(({ children, ...props }) => (
  <StyledBaseTemplate {...props}>
    <NavBar />
    <StyledContent {...props}>
      {children}
    </StyledContent>
  </StyledBaseTemplate>
))