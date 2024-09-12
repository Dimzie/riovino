import React, { useCallback, useEffect } from 'react';
import { CloseBtn, ModalContainer, Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';
import { CloseIcon } from 'helpers/Icons/Icons.styled';

const Modal = ({ children, onCloseModal }) => {
  const handleEscapePress = useCallback(
    e => {
      if (e.key === 'Escape') {
        onCloseModal();
      }
    },
    [onCloseModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscapePress);
    return () => {
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, [handleEscapePress]);

  return createPortal(
    <Overlay>
      <ModalContainer>
        <CloseBtn type="button" onClick={onCloseModal}>
          <CloseIcon />
        </CloseBtn>
        {children}
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root')
  );
};

export default Modal;
