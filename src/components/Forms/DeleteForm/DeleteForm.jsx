import React from 'react';
import {
  DeleteFormNoBtn,
  DeleteFormYesBtn,
  Li,
  List,
  Question,
} from './DeleteForm.styled';

const DeleteForm = ({ onDelete, onCloseModal, id }) => {
  return (
    <>
      <Question>¿Estás seguro de que quieres eliminar?</Question>
      <List>
        <Li>
          <DeleteFormYesBtn onClick={onDelete}>Sí</DeleteFormYesBtn>
        </Li>
        <Li>
          <DeleteFormNoBtn onClick={onCloseModal}>No</DeleteFormNoBtn>
        </Li>
      </List>
    </>
  );
};

export default DeleteForm;
