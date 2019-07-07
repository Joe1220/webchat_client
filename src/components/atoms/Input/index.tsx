import styled from 'styled-components'

interface IInput {
  placeholder?: string
  value?: string
}

const Input = styled('input')<IInput>`
  width: 100%;
  box-sizing: border-box;
  height: 0.8rem + 2px;
  font-size: 1rem;
  padding: ${props => props.theme.spaces.inputPadding};
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: 0.25rem;
  transition: all ease-out .45s;
`

export default Input