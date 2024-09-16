import { Field, Form } from 'formik';
import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 25px;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SpanText = styled.span``;

export const Label = styled.label`
  position: relative;
  color: #ffffff;
  width: 100%;
`;

export const StyledField = styled(Field)`
  width: 100%;
  height: 30px;
  padding: 0 10px;
  padding-bottom: 2px;
  color: #ffffff;
  background-color: rgba(46, 47, 66, 1);
  outline: none;
  border: 1px solid ${props => (props.$isvalid ? 'transparent' : 'red')};
  transition: border-color 100ms ease-in;
  &:focus {
    border-color: orange;
  }
`;

export const StyledOption = styled.option`
  background-color: rgba(46, 47, 66, 1);
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
  color: #ffffff;
`;

export const ImageText = styled.p`
  text-align: center;
  color: #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  background-color: #1c1c28;
`;

export const AddIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  width: 42px;
  height: 42px;
  background-color: rgba(46, 47, 66, 1);
  border: transparent;
  color: #ffffff;
  cursor: pointer;
  transition: color 100ms ease-in, border 100ms ease-in;
  &:hover {
    border: 1px solid #c0aa41;
    color: #c0aa41;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 120px;
  height: 120px;
  border: 1px solid #ffffff;
  &:hover {
    border: 1px solid #c0aa41;
  }
`;

export const DeleteIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: rgba(46, 47, 66, 1);
  color: #c0aa41;
  border: transparent;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 100ms ease-in;

  ${ImageWrapper}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

export const SpanSymbol = styled.span`
  color: red;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  border: ${props => (props.hasItems ? '1px solid #ffffff' : 'none')};
`;

export const Li = styled.li`
  padding: 10px 0;
`;

export const CriticContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 5px;
  width: 48px;
  height: 28px;

  background-color: rgba(46, 47, 66, 1);
  &:hover button {
    display: block;
    border: 1px solid #c0aa41;
  }
`;

export const CriticName = styled.p`
  text-align: center;
  font-size: 12px;
  color: ${props => (props.isSpecial ? '#c0aa41' : '')};
`;

export const CriticDeleteBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: rgba(46, 47, 66, 1);
  color: #c0aa41;
  border: transparent;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 100ms ease-in;

  ${CriticContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

export const AddCriticBtn = styled.button`
  font-family: 'Roboto';
  text-align: center;
  max-width: 200px;
  height: 35px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: rgba(46, 47, 66, 1);
  border: transparent;
  color: #ffffff;
  cursor: pointer;
  transition: color 100ms ease-in, border 100ms ease-in;
  &:hover {
    border: 1px solid #c0aa41;
    color: #c0aa41;
  }
  &:disabled {
    border: 1px solid grey;
    color: grey;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  font-family: 'Roboto';
  height: 35px;
  width: 200px;
  border: 1px solid #c0aa41;
  background-color: #c0aa41;
  color: #ffffff;
  margin: 0 auto;
  cursor: pointer;
  transition: color 100ms ease-in, border-color 100ms ease-in,
    background-color 100ms ease-in;
  &:hover,
  &:focus {
    color: #c0aa41;
    border-color: #c0aa41;
    background-color: #ffffff;
  }
`;
