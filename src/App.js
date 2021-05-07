import {useState, useEffect} from "react"
// Components
import Form from "./components/Form"
import TaskList from "./components/TaskList"

function App() {
  const [inputText, setInputText] = useState("");
  // initialize tasks w/ 2 demo task items
  const [tasks, setTasks] = useState([
    {id: new Date().getUTCMilliseconds(), text: "Conquer the world!", completed: false},
    {id: new Date().getUTCMilliseconds() + 1, text: "Clean my socks", completed: true},
  ]);

  useEffect(() => {
    getLocalTasks()
  }, [])

  useEffect(() => {
    saveLocalTasks()
  }, [tasks])

  const saveLocalTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  const getLocalTasks = () => {
    if(localStorage.getItem('tasks') === null) {
      localStorage.setItem('tasks', JSON.stringify([]))
    } else {
      let localTasks = JSON.parse(localStorage.getItem('tasks'))
      setTasks(localTasks)
    }
  }

  return (
    <div className="App">
      <header>
      <h1>Off-Task</h1>
      <p>Get it done!</p>
      </header>

      <Form inputText={inputText} setInputText={setInputText} tasks={tasks} setTasks={setTasks} />

      <TaskList tasks={tasks} setTasks={setTasks} />

    </div>
  );
}

export default App;
