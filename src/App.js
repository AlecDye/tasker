function App() {
  return (
    <div className="App">
      <header>
      <h1>Off-Task</h1>
      <p>Get it done!</p>
      </header>
      <form action="#">
        <div className="form-group">
          <label htmlFor=""></label>
          <input type="text" placeholder="Type Something..." />
          <button type="submit">Add</button>
        </div>
      </form>

      <div className="task-list-container">
        <ul>
          <li>
            <div className="task-group">
              <p>Make an App!</p>
              <div className="button-group">
              <button>Edit</button>
              <button>Delete</button>
              </div>
            </div>
          </li>
          <li>
            <div className="task-group">
              <p className="completed">Pick up Dinner</p>
              <div className="button-group">
              <button>Edit</button>
              <button>Delete</button>
              </div>
            </div>
          </li>
          <li>
            <div className="task-group">
              <p>Run a Mile!</p>
              <div className="button-group">
              <button>Edit</button>
              <button>Delete</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default App;
