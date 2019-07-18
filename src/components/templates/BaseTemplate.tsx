import React from 'react'
import styled, { css } from 'styled-components'
import { observer } from 'mobx-react'

import { NavBar } from 'components/organisms'

const StyledBaseTemplate = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  box-sizing: border-box;
`

const StyledContent = styled('section')`
  flex: 1 1 auto;
  box-sizing: border-box;
  padding: ${props => props.theme.spaces.lg};
  min-width: 920px;
`

const StyledStaticComponent = styled('div')`
  box-sizing: border-box;
  padding: ${props => props.theme.spaces.lg};
`

export default observer(({ nav, HeadComponent, children, Footer, ...props }) => (
  <StyledBaseTemplate {...props}>
    {nav && <NavBar />}
    {HeadComponent && <StyledStaticComponent><HeadComponent /></StyledStaticComponent>}
    <StyledContent {...props}>
      {children}
    </StyledContent>
    {Footer && <StyledStaticComponent><Footer /></StyledStaticComponent>}
  </StyledBaseTemplate>
))