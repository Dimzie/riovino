import React from 'react';
import { Button, DeleteBtnSpan } from './DeleteBtn.styled';
import { TrashIcon } from 'helpers/Icons/Icons.styled';

const DeleteBtn = ({ handleDelete }) => {
  return (
    <Button type="button" onClick={handleDelete}>
      <DeleteBtnSpan>
        <TrashIcon />
      </DeleteBtnSpan>
    </Button>
  );
};

export default DeleteBtn;
