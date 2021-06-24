const TaskItem = props => {
  const {task, onCompleteTask, onDeleteTask} = props
  const {id, text, completed} = task


  return (
    <li>
      <div>
        <p
          className={completed ? "completed" : ""} 
          onClick={() => onCompleteTask(id)}
        >
          {text}
        </p>
        <button 
          type="button"
          onClick={() => onDeleteTask(id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TaskItem
