import TaskItem from "./TaskItem"

function TaskList({tasks, setTasks}) {
  return(
    <div className="task-list-container">
      <h2>The List!</h2>
      <ul className={`task-list-ul ${tasks.length > 0 ? "" : "empty"}`}>
        {tasks.length > 0 ? tasks.map(task => (
          <TaskItem task={task} tasks={tasks} setTasks={setTasks} key={task.id} text={task.text} />
        )) : "All tasks completed. Nice Work!"}
      </ul>
    </div>
  )
}

export default TaskList

// {`task-item ${task.completed ? "completed" : ""}`}