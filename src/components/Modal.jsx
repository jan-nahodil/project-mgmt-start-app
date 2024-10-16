import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

//Modal component using forwardRef to allow the parent component to control the modal
const Modal = forwardRef(function Modal({ children }, ref) {
  const dial = useRef(); //Used to reference to the <dialog> 
  
  //open() method to parent component via ref using useImperativeHandle
  useImperativeHandle(ref, () => {
    return {
      open() {
        //Call showModal() on the <dialog> element to open the modal
        dial.current.showModal();
      },
    };
  });

  //Using createPortal to render the modal into a different part of the DOM
  return createPortal(
    <dialog
      ref={dial}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog">
        <button className="px-6 by-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal; //Export the Modal as default export
