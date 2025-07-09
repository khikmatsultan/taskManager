import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]); // Store tasks
  const [newTask, setNewTask] = useState(''); // Store new task input

  // Load tasks when the app starts (we'll connect to backend later)
  useEffect(() => {
    // For now, use mock data
    const mockTasks = [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a Task Manager', completed: false },
    ];
    setTasks(mockTasks);
  }, []);

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === '') return; // Don't add empty tasks
    const newTaskObj = {
      id: Date.now(), // Temporary ID
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask(''); // Clear input
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };




















return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
