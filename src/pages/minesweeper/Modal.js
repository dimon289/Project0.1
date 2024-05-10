import React from 'react';

function Modal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Ви виграли!</h2>
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
}

export default Modal;