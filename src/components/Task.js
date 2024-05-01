import React from "react";

function Task({task,onDelete}) {
  const{text,category}=task;

  const handleDelete=()=>{
    onDelete(task);
  };
  return (
    <div className="task">
      <div>
        <strong>{text}</strong>-{category}
        </div>
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
      <div>
      <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
