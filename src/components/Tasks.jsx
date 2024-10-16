import NewTask from "./NewTask";

//Tasks component to display a list of tasks and allow adding/removing tasks
export default function Tasks({ tasks, onAdd, onDel }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
       {/* Render the NewTask component to add new tasks */}
      <NewTask onAdd={onAdd} />
      {/* If no task exist diplay message to the user */}
      {tasks.length === 0 && <p className="text-stone-800 my-4">No tasks</p>}
      {/* If there are tasks, than display tham */}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((tas) => (
            <li key={tas.id} className="flex justify-between my-4">
              <span>{tas.text}</span>
              <button
                onClick={() => onDel(tas.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
