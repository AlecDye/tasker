import TaskItem from "./TaskItem"

const TaskList = props => {
  const {tasks, onCompleteTask, onDeleteTask} = props

  return (
      <ul className="task-list flow-content">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onCompleteTask={onCompleteTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
  )
}

export default TaskList
