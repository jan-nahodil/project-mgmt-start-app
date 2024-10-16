import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [task, setTask] = useState(""); //Manage the task input field value
  
  //Function to handle changes in the input field on every keystrike in the input field
  function handleChange(event) {
    setTask(event.target.value);
  }

  //Function to handle the Add task button click
  function handleClick() {
    if (task.trim() === "") {
      return;
    }
    onAdd(task);
    setTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={task}
      />
      <button
        className="test-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add task
      </button>
    </div>
  );
}
