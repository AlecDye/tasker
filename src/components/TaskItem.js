import {useState} from "react"

function TaskItem({text, task, tasks, setTasks}){
  const [isEditable, setEditable] = useState(false)

  const editToggle = () => {
    setEditable(!isEditable);
  }

  const editHandler = (e) => {
    setTasks(tasks.map(item => {
      if (item.id === task.id){ return {...item, text: e.target.value }} return item
    }))
  }

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
      <li className={`task-item ${task.completed ? "completed" : ""}`} onClick={completeHandler}>
        {isEditable ? <input value={text} onChange={editHandler} /> : <p>{text}</p>}
      </li>
      <div className="button-group">
        <button onClick={editToggle} >{isEditable ? "Update" : "Edit"}</button>
        <button onClick={deleteHandler} >Delete</button>
      </div>
    </div>
  )
}

export default TaskItem