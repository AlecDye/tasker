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

  const completeTaskHandler = id => {
    const updatedTasks = taskList.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task
    })
    setTaskList(updatedTasks)
  }

  const deleteTaskHandler = id => {
    const filteredTasks = taskList.filter(task => id !== task.id)
    setTaskList(filteredTasks)
  }

  return (
    <div className="container">
      <Header />
      <AddTask 
        onAddTask={addTaskHandler}
      />
      {taskList.length === 0 && "No current tasks!"}
      {taskList && 
        <TaskList 
          tasks={taskList} 
          onCompleteTask={completeTaskHandler} 
          onDeleteTask={deleteTaskHandler}
        />
      }
    </div>
  );
}

export default App;
