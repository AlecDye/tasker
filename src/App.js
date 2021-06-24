import {useState} from "react"
// Components
import Header from "./components/Header"
import AddTask from "./components/Tasks/AddTask"
import TaskList from "./components/Tasks/TaskList"

function App() {
  const [taskList, setTaskList] = useState([{id: 1, text: "hello", completed: true}])

  const addTaskHandler = task => {
    setTaskList(prevTaskList => {
      return [...prevTaskList, {id: Math.random().toString(), text: task, completed: false}]
    })
  }

  // toggleCompleteHandler?
  const completeTaskHandler = id => {
    const updatedTasks = taskList.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task
    })
    setTaskList(updatedTasks)
  }

  // deleteTaskHandler

  return (
    <div className="container">
      <Header />
      <AddTask onAddTask={addTaskHandler} />
      <TaskList tasks={taskList} onCompleteTask={completeTaskHandler}/>
    </div>
  );
}

export default App;
