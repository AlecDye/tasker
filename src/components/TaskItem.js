function TaskItem({text, tasks, setTasks}){
  return(
    <div className="task-group">
      <li>{text}</li>
      <div className="button-group">
        <button>Done</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default TaskItem