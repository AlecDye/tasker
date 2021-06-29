import {useState} from "react"
// Components
import Header from "./components/UI/Header"
import AddTask from "./components/Tasks/AddTask"
import TaskList from "./components/Tasks/TaskList"

function App() {
  const [taskList, setTaskList] = useState([{id: 1, text: "Create a task!", completed: false}])

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
      <section className="card">
        <Header />
        <AddTask 
          onAddTask={addTaskHandler}
        />
      </section>

      <section className="card">  
        {taskList.length === 0 && <p>No current tasks!</p>}
        {taskList && 
          <TaskList 
            tasks={taskList} 
            onCompleteTask={completeTaskHandler} 
            onDeleteTask={deleteTaskHandler}
          />
        }
      </section>
    </div>
  );
}

export default App;
