const TaskItem = props => {
  const {task, onCompleteTask} = props
  const {id, text, completed} = task


  return (
    <li>
      <p className={completed ? "completed" : ""} onClick={() => onCompleteTask(id)}>{text}</p>
    </li>
  )
}

export default TaskItem
