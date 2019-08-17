import styled, { css } from "styled-components";

interface MyProps {
  fontSize?: string;
  sm?: boolean;
  lg?: boolean;
  href: string;
}

const StyledA = styled("a")<MyProps>`
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

  ${props =>
    props.sm &&
    css`
      font-size: ${props => props.theme.fontSize.sm};
    `}

  ${props =>
    props.lg &&
    css`
      font-size: ${props => props.theme.fontSize.lg};
    `}
`;

export default StyledA;
