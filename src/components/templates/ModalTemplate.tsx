import styled, { css } from 'styled-components'

interface IStyledModalTemplate {
  src?: string
}

const StyledModalTemplate = styled('div')<IStyledModalTemplate>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;

  ${props => props.src && css`
    background: ${props.src} no-repeat;
    background-size: cover;
  `}
`

export default StyledModalTemplate