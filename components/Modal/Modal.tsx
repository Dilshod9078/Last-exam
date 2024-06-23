import React from 'react'
import './Modal.scss'

interface ModalProps {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({children, showModal, setShowModal}: ModalProps) {
  const exitBtnClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    if ((evt.target as HTMLElement).id === "modal-wrapper") {
      setShowModal(false)
    }
  }

  return (
    <div onClick={exitBtnClick} id="modal-wrapper" className={` transition-[0.4s] modal ${showModal ? "" : "scale-0"}`}>
      <div className="modal-content">
        {children}
      </div>
    </div>
  )
}

export default Modal