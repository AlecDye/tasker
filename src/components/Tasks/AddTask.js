import { useState } from "react"
import { inputPlaceholder } from "../../helpers/inputHelpers"

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

  const cancelInputHandler = () => {
    setEnteredTask("")
  }

  return (
    <form onSubmit={addTaskHandler}>
      <label 
        htmlFor="add-task"
        className="form-label"
      >
        Add a task
      </label>
      <div className="input-group">
      <input
        id="add-task"
        type="text"
        name="text"
        value={enteredTask}
        onChange={taskChangeHandler}
        placeholder={inputPlaceholder()}
        autoComplete="off"
        className="form-control me-2"
      />
      <button 
        type="submit"
        className="btn btn-primary me-1"
      >
        Add
      </button>
      {enteredTask !== "" && <button className="btn btn-secondary" type="button" onClick={cancelInputHandler}>Cancel</button>}
      </div>
    </form>
  )
}

export default AddTask
