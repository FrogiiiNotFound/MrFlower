import React from 'react';
import './modal.scss';

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
