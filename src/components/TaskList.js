import React from "react";
import Task from "./Task";

function TaskList({tasks,onDeleteTask}) {
  const handleDeleteTask=(taskToDelete)=>{
    onDeleteTask(taskToDelete);
  }
  return (
    <div className="tasks">
      {tasks.map(((task,index) => 
      <Task key={index} task={task} onDelete={handleDeleteTask}/>

    ))}
    </div>
  );
}

export default TaskList;
