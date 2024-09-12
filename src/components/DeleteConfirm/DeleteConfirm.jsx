import React from 'react';

const DeleteConfirm = ({ onDelete, onCloseModal, id }) => {
  return (
    <div>
      <button onClick={onDelete}>Yes</button>
      <button onClick={onCloseModal}>No</button>
    </div>
  );
};

export default DeleteConfirm;
