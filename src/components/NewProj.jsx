import { useRef } from "react";
import Inputt from "./Input";
import Modal from "./Modal";

export default function NewProj({ onAdd, onCancle }) {
  const modal = useRef();

  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = desc.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid input</h2>
        <p className="text-stone-500">Prooblem bro</p>
        <p className="text-stone-500 mb-4">
          Please chceck, if you entered all the inputs.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancle}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 by-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <Inputt type="text" ref={title} label="Title" />
        <Inputt ref={desc} label="Description" isTextArea />
        <Inputt type="date" ref={dueDate} label="Due date" />
      </div>
    </>
  );
}
