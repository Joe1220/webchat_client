import styled, { css } from 'styled-components'

interface MyProps {
  sm?: boolean
  lg?: boolean
  thick?: boolean
  blue?: boolean
  white?: boolean
  error?: boolean
}

const StyledP = styled('p')<MyProps>`
  font-size: ${props => props.theme.fontSize.base};
  font-weight: 500;

  ${props => props.thick && css`
    font-weight: 700;
  `}

  ${props => props.sm && css`
    font-size: ${props => props.theme.fontSize.sm};
  `}

  ${props => props.lg && css`
    font-size: ${props => props.theme.fontSize.lg};
  `}

  ${props => props.blue && css`
    color: ${props => props.theme.colors.blue};
  `}

  ${props => props.white && css`
    color: ${props => props.theme.colors.white};
  `}

  ${props => props.error && css`
    color: ${props => props.theme.colors.error};
  `}
`

export default StyledP

