import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filteredTasks,setFilteredTasks]=useState(TASKS);

  const handleFilterChange=(category)=>{
    if (category==="All"){
      setFilteredTasks(TASKS);
    }else{
      const filtered=TASKS.filter((task)=>task.category===category);
      setFilteredTasks(filtered);
    }
  };

  const handleTaskFormSubmit=(newTask)=>{
    const updatedTasks=[...filteredTasks,newTask];
    setFilteredTasks(updatedTasks);
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={[...CATEGORIES,"ALL"]} onFilterChange={handleFilterChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks}/>
    </div>
  );
}

export default App;
