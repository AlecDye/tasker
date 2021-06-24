import { useState } from "react"

const AddTask = props => {
  const {onAddTask} = props
  const [enteredTask, setEnteredTask] = useState('')

  const taskChangeHandler = e => {
    setEnteredTask(e.target.value)
  }

  const addTaskHandler = e => {
    e.preventDefault()
    onAddTask(enteredTask)
    setEnteredTask("")
  } 

  return (
    <form onSubmit={addTaskHandler}>
      <label htmlFor="add-task">Add a task</label>
      <input
        id="add-task"
        type="text"
        name="text"
        value={enteredTask}
        onChange={taskChangeHandler}
        placeholder="Clean dishes..."
        autoComplete="off"
      />
      <button type="submit">Add</button>
      {enteredTask !== "" && <button type="button">Cancel</button>}
    </form>
  )
}

export default AddTask
