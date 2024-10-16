import { useRef } from "react";
import Inputt from "./Input";
import Modal from "./Modal";

export default function NewProj({ onAdd, onCancle }) {
  // Component for adding a new project
  const modal = useRef();
  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();

  //Function to handle saving the project
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = desc.current.value;
    const enteredDueDate = dueDate.current.value;

    //Validation of inputed values
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    //Call the onAdd function (that is passed from App.jsx where it is defined in handleForwardingProject) 
    //and pass the new project details (if all inputs are valid)
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
