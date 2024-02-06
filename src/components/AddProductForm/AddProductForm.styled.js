import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Label = styled.label`
  color: #000;
  width: 100%;
`;

export const StyledField = styled(Field)`
  display: block;
  width: 100%;
`;

export const StyledErrorMessage = styled.p``;

export const SubmitButton = styled.button``;
