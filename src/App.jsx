import Sidebar from "./components/Sidebar";
import NewProj from "./components/NewProj";
import NoProject from "./components/NoProject";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [project, setProject] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(taskText) {
    setProject((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: taskText,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function handleDelTask(id) {
    setProject((prevProj) => {
      return {
        ...prevProj,
        selectedProjectId: undefined,
        tasks: prevProj.tasks.filter((tas) => tas.id !== id),
      };
    });
  }

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

  function handleSelectProj(id) {
    setProject((prevProj) => {
      return {
        ...prevProj,
        selectedProjectId: id,
      };
    });
  }

  function handleForwardingProject(projectData) {
    setProject((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleAddProject() {
    setProject((prevProj) => {
      return {
        ...prevProj,
        selectedProjectId: null,
      };
    });
  }

  function handleCancle() {
    setProject((prevProj) => {
      return {
        ...prevProj,
        selectedProjectId: undefined,
      };
    });
  }

  /*Needed for trobleshooting
  console.log(project);*/

  const selectedProject = project.projects.find(
    (proj) => proj.id === project.selectedProjectId
  );

  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDelTask={handleDelTask}
      tasks={project.tasks}
      project={selectedProject}
      onDel={handleDeleteProj}
    />
  );

  if (project.selectedProjectId === null) {
    content = (
      <NewProj onAdd={handleForwardingProject} onCancle={handleCancle} />
    );
  } else if (project.selectedProjectId === undefined) {
    content = <NoProject onAdd={handleAddProject} />;
  }

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
