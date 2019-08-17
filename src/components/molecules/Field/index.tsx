import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import { Input, Label, P } from "components/atoms";

interface IField {
  label?: string;
  value?: string;
  field?: any;
  inputProps?: any;
}

const StyledField = styled("div")`
  height: auto;
  width: 100%;
  margin-bottom: ${props => props.theme.spaces.base};
`;

const Field: React.FC<IField> = observer(({ label, field, ...inputProps }) => (
  <StyledField>
    {label && <Label>{label}</Label>}
    <Input {...inputProps} />
    <P error>{field.error}</P>
  </StyledField>
));

export default Field;
