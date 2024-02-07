import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  margin: 0 auto;
  gap: 5px;
`;

export const Label = styled.label`
  position: relative;
  color: #000;
  width: 100%;
`;

export const StyledField = styled(Field)`
  width: 100%;
  height: 30px;
  padding: 0 10px;
  padding-bottom: 2px;
  background-color: lightgray;
  outline: none;
  border: 2px solid ${props => (props.$isvalid ? 'transparent' : 'red')};
`;

export const StyledOption = styled.option`
  background-color: #fff;
`;

export const StyledErrorMessage = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  color: red;
`;

export const ImageLabel = styled.label`
  color: #000;
`;

export const ImageText = styled.p`
  text-align: center;
  cursor: pointer;
`;

export const AddIconWrapper = styled.div`
  width: 40px;
  margin: 0 auto;
`;

export const SubmitButton = styled.button``;
