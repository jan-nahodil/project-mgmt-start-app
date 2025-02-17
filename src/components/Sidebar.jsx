//Sidebar component, that displays the list of projects and a button to add new projects
export default function Sidebar({
  onAdd,
  projects,
  onSelect,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:teext-xl text-stone-300">
        Your projects
      </h2>
      <div>
        <button
          onClick={onAdd}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          Add project
        </button>
      </div>
      <ul className="mt-8">
        {/* Map the projects array to render each project as a list item */}
        {projects.map((project) => {
          let cssClass =
            "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
          if (cssClass.id === selectedProjectId) {
            cssClass += " bg-stone-800 text-stone-200";
          } else {
            cssClass += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button onClick={() => onSelect(project.id)} //Calls the onSelect function when a project is clicked
                className={cssClass}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
