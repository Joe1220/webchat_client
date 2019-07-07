import styled, { css } from 'styled-components'

interface IStyledBaseTemplate {
  src?: string
}

const StyledBaseTemplate = styled('div')<IStyledBaseTemplate>`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;

  ${props => props.src && css`
    background: ${props.src} no-repeat;
    background-size: cover;
  `}
`

export default StyledBaseTemplate