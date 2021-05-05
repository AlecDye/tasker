import TaskItem from "./TaskItem"

function TaskList({tasks, setTasks}) {
  return(
    <div className="task-list-container">
      <ul className="task-list-ul">
        {tasks.map(task => (
          <TaskItem task={task} tasks={tasks} setTasks={setTasks} key={task.id} text={task.text} />
        ))}
      </ul>
    </div>
  )
}

export default TaskList