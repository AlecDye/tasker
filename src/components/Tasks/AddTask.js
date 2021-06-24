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
  } 

  return (
    <form onSubmit={addTaskHandler}>
      <label htmlFor="task">Add a task</label>
      <input
        id="task"
        type="text"
        value={enteredTask}
        onChange={taskChangeHandler}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTask
