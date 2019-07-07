import styled from 'styled-components'

interface MyProps {
  src: string;
  width: string;
  height: string;
  alt: string;
}

const StyledIcon = styled('img')<MyProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  border: none;
  background: inherit;
`

export default StyledIcon