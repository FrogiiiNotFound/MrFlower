import React from 'react';
import './modal.scss';

type ModelProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModelProps) => {
  return (
    <div className="layout">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
