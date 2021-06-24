import TaskItem from "./TaskItem"

const TaskList = props => {
  const {tasks} = props

  return (
    <div>
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id} 
            text={task.text}
            completed={task.completed}
          />
        ))}
      </ul>
    </div>
  )
}

export default TaskList
