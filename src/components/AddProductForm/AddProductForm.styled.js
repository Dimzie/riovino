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

export const FieldWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
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
  /* text-align: center; */
  color: #000;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 20px;

  background-color: lightgray;
`;

export const AddIconWrapper = styled.div`
  width: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100px;
  height: 100px;
`;

export const DeleteIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: -25px;
  cursor: pointer;
  color: #000;
`;

export const SubmitButton = styled.button``;
