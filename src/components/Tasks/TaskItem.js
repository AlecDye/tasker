const TaskItem = props => {
  const {text, completed} = props

  return (
    <li>
      <p className={completed && "completed"}>{text}</p>
    </li>
  )
}

export default TaskItem
