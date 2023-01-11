import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import sun from "./assets/icon-sun.svg";
import cross from "./assets/icon-cross.svg";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div className="App">
      <main className="main">
        <div className="container">
          <header className="header">
            <h1>TODO</h1>
            <img src={sun} alt="" />
          </header>
          <form className="form">
            <div className="marker"></div>
            <input
              type="text"
              placeholder="Create a new task..."
              className="form_add_task"
            />
          </form>
        </div>
        <div className="container shadow">
          <section className="tasklist">
            <ul>
              {tasks.map((t) => (
                <li key={t.id}>
                  <input type="checkbox" />
                  <span>{t.text}</span>
                  <img src={cross} alt="delete" className="delete" />
                </li>
              ))}
            </ul>
          </section>
          <footer className="footer">
            <span>4 items left</span>
            <span>Clear completed</span>
          </footer>
        </div>
        <div className="container shadow space border">
          <section className="task_filter">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

const initialTasks = [
  { id: 0, text: "Hog around the park 3x", done: true },
  { id: 1, text: "10 minutes meditation", done: false },
  { id: 2, text: "Read for 1 hour", done: false },
  { id: 3, text: "Pick up groceries", done: false },
  { id: 4, text: "Complete Todo App on Frontend Mentor", done: false },
];
