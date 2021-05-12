function TaskItem({text, task, tasks, setTasks}){
  const deleteHandler = () => {
    setTasks(tasks.filter(element => element.id !== task.id))
  }

  const completeHandler = () => {
    setTasks(tasks.map(item => {
      if (item.id === task.id){ return {...item, completed: !item.completed}} return item
    }))
  }

  return(
    <div className="task-group">
      <li className={`task-item ${task.completed ? "completed" : ""}`} onClick={completeHandler}><p>{text}</p></li>
      <div className="button-group">
        <button onClick={deleteHandler} >Delete</button>
      </div>
    </div>
  )
}

export default TaskItem