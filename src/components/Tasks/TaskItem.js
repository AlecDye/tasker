import { TrashFill } from "react-bootstrap-icons"

const TaskItem = props => {
  const {task, onCompleteTask, onDeleteTask} = props
  const {id, text, completed} = task


  return (
    <li className="list-group-item py-3">
      <div className="input-group align-items-center">
        <p
          className={`form-control mb-0 me-2 ${completed ? "completed" : ""}`} 
          onClick={() => onCompleteTask(id)}
          disabled
        >
          {text}
        </p>
        <button 
          type="button"
          onClick={() => onDeleteTask(id)}
          className="btn btn-danger"
        >
          <TrashFill />
        </button>
      </div>
    </li>
  )
}

export default TaskItem
