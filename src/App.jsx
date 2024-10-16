//Imprting nescesary components
import Sidebar from "./components/Sidebar";
import NewProj from "./components/NewProj";
import NoProject from "./components/NoProject";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  // Defining state to manage the showen data: selected project, list of projects, tasks,...
  const [project, setProject] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  //Function, that is used to handle adding new task
  function handleAddTask(taskText) {
    setProject((prevState) => {
      const taskId = Math.random(); //Here i generate random ID, normaly i would add +1 to last ID, but decided to practice this for this small project
      const newTask = {
        text: taskText,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      // Return updated project state with the new task added
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  //Function, that is used to delete task
  function handleDelTask(id) {
    setProject((prevProj) => {
      return {
        ...prevProj,
        selectedProjectId: undefined,
        tasks: prevProj.tasks.filter((tas) => tas.id !== id),
      };
    });
  }

  //Function, that is used to delete project
  function handleDeleteProj() {
    setProject((prevProj) => {
      return {
        ...prevProj,
        selectedProjectId: undefined,
        projects: prevProj.projects.filter(
          (proj) => proj.id !== prevProj.selectedProjectId
        ),
      };
    });
  }

  //Function, that is used to delete task
  function handleSelectProj(id) {
    setProject((prevProj) => {
      return {
        ...prevProj,
        selectedProjectId: id,
      };
    });
  }

  //Function, that is used to handle forwarding project data
  function handleForwardingProject(projectData) {
    setProject((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      //Return updated project state with the new project added
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  //Function, that is used to handle adding new project
  function handleAddProject() {
    setProject((prevProj) => {
      return {
        ...prevProj,
        selectedProjectId: null,
      };
    });
  }

  //Function, that is used to handle canceling the project creation
  function handleCancle() {
    setProject((prevProj) => {
      return {
        ...prevProj,
        selectedProjectId: undefined, // Reset selected project to undefined
      };
    });
  }

  /*Needed for trobleshooting
  console.log(project);*/

  //Find the currently selected project based on its ID
  const selectedProject = project.projects.find(
    (proj) => proj.id === project.selectedProjectId
  );
  
  // Variable to store content based on current state 
  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDelTask={handleDelTask}
      tasks={project.tasks}
      project={selectedProject}
      onDel={handleDeleteProj}
    />
  );

   //Defining, what should happen, when user decides to create some project
  if (project.selectedProjectId === null) {
    content = (
      <NewProj onAdd={handleForwardingProject} onCancle={handleCancle} />
    );
  } else if (project.selectedProjectId === undefined) {  //And here I define what happens, when no project is selected
    content = <NoProject onAdd={handleAddProject} />;
  }

  //Main render section
  return (
    <main className="h-screen my-4 flex gap-8">
      <Sidebar
        onAdd={handleAddProject}
        projects={project.projects}
        onSelect={handleSelectProj}
        selectedProjectId={project.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
