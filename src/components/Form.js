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


  return (
    <form className="form-container">
    <div className="form-group">
      <label htmlFor="taskInput"></label>
      <input id="taskInput" type="text" placeholder="Add a new task..." value={inputText} onChange={inputTextHandler}/>
      <button type="submit" onClick={submitTaskHandler} >Add</button>
    </div>
  </form>
  )
}

export default Form;
