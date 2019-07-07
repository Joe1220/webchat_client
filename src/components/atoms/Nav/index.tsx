import styled from 'styled-components'

interface MyProps {
  children: any
}

const StyledNav = styled('nav')<MyProps>`
  display: flex;
  flex-direction: row;
  list-style: none;
  background: inherit;

  & > li {
    margin-right: ${props => props.theme.spaces.lg};
    &:last-child {
      margin: 0;
    }
  }
`

export default StyledNav