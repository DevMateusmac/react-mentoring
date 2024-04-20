import { type ReactNode, forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

export type ModalHandleProp = {
  open: () => void;
}

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
}


const Modal = forwardRef<ModalHandleProp, ModalProps>(function Modal({children, onClose}, ref){
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, ()=>{
    return {
      open: () => {
        if(dialog.current){
          dialog.current.showModal();
        }
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="modal" onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal-root')!
  );
}) 
export default Modal;