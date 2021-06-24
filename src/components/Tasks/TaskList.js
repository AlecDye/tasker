import TaskItem from "./TaskItem"

const TaskList = props => {
  const {tasks, onCompleteTask} = props

  return (
    <div>
      <ul
        role="list"
      >
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onCompleteTask={onCompleteTask}
          />
        ))}
      </ul>
    </div>
  )
}

export default TaskList
