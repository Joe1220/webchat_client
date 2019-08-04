import styled, { css } from 'styled-components'

interface IInput {
  placeholder?: string
  value?: string
  onChange?: (e: any) => void
  full?: boolean
}

const Input = styled('input')<IInput>`
  flex: 1 0 auto;
  box-sizing: border-box;
  height: 0.8rem + 2px;
  font-size: 1rem;
  padding: ${props => props.theme.spaces.inputPadding};
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: 0.25rem;
  transition: all ease-out .45s;

  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }

  ${props => props.full && css`
    width: 100%;
  `}
`

export default Input