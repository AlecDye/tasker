import {useState} from "react"
// Components
import Form from "./components/Form"
import TaskList from "./components/TaskList"

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);


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
