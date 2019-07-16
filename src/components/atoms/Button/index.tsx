import styled, { css } from 'styled-components'

interface IButton {
  lg?: boolean
  grey?: boolean
  full?: boolean
  onClick?: (e: any) => void
} 

const Button = styled('button')<IButton>`
  display: inline-block;
  font-size: ${props => props.theme.fontSize.base};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spaces.buttonPadding};
  background: ${props => props.theme.colors.blue};
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover{
    opacity: 0.7;
    transition: all ease-out .45s;
  }

  ${props => props.lg && css`
    font-size: ${props => props.theme.fontSize.lg};
  `}

  ${props => props.grey && css`
    background: ${props => props.theme.colors.grey};
  `}

  ${props => props.full && css`
    width: 100%;
`}
`

export default Button