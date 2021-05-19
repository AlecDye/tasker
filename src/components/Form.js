function Form({inputText, setInputText, tasks, setTasks}) {

  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }
  const submitTaskHandler = (e) => {
    e.preventDefault();
    // setTaks -> spread existing tasks and add new task after
    setTasks([
      ...tasks, {id: new Date().getUTCMilliseconds(), text: inputText, completed: false}
    ])
    setInputText("")
    console.log("Submitted!")
  }

  const cancelHandler = (e) => {
    e.preventDefault()
    setInputText("");
  }

  return (
    <form className="form-container">
    <div className="form-group">
      <label htmlFor="taskInput">Add a Task</label>
      <input id="taskInput" type="text" placeholder="Buy groceries..." value={inputText} onChange={inputTextHandler}/>
      <button type="submit" onClick={submitTaskHandler} >Add</button>
      <button type="submit" onClick={cancelHandler} >Cancel</button>
    </div>
  </form>
  )
}

export default Form;
