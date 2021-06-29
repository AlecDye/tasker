import { useState } from "react"

const AddTask = props => {
  const {onAddTask} = props
  const [enteredTask, setEnteredTask] = useState('')

  const taskChangeHandler = e => {
    setEnteredTask(e.target.value)
  }

  const addTaskHandler = e => {
    e.preventDefault()
    if(enteredTask.trim().length === 0) {
      return
    }
    onAddTask(enteredTask)
    setEnteredTask("")
  }

  return (
    <form onSubmit={addTaskHandler} className="add-task">
      <label htmlFor="add-task">Add a task</label>
      <input
        id="add-task"
        type="text"
        name="text"
        value={enteredTask}
        onChange={taskChangeHandler}
        placeholder="Wash the dishes..."
        autoComplete="off"
      />
      <button className="btn" type="submit">Add</button>
    </form>
  )
}

export default AddTask
