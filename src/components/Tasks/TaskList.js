import TaskItem from "./TaskItem"

const TaskList = props => {
  const {tasks, onCompleteTask, onDeleteTask} = props

  return (
    <div>
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onCompleteTask={onCompleteTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  )
}

export default TaskList
