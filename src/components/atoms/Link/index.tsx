import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

interface MyProps {
  fontSize?: string;
  sm?: boolean;
  lg?: boolean;
  to: string;
}

const StyledLink = styled(Link)<MyProps>`
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: 700;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  background: inherit;
  box-sizing: border-box;
	display: block;

  &:hover {
    text-decoration: underline;
  }

  ${props => props.sm && css`
    font-size: ${props => props.theme.fontSize.sm};
  `}

  ${props => props.lg && css`
    font-size: ${props => props.theme.fontSize.lg};
  `}
`

export default StyledLink