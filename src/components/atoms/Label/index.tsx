import styled, { css } from 'styled-components'

interface ILabel {
  sm?: boolean
  lg?: boolean
  blue?: boolean
}

const StyledLabel = styled('label')<ILabel>`
  display: block;
  font-size: ${props => props.theme.fontSize.base};
  font-weight: 500;
  color: ${props => props.theme.colors.grey};
  margin-bottom: ${props => props.theme.spaces.sm};

  ${props => props.sm && css`
    font-size: ${props => props.theme.fontSize.sm};
  `}

  ${props => props.lg && css`
    font-size: ${props => props.theme.fontSize.lg};
  `}

  ${props => props.blue && css`
    color: ${props => props.theme.colors.blue};
  `}
`

export default StyledLabel

