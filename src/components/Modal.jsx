import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dial = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dial.current.showModal();
      },
    };
  });

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

export default Modal;
