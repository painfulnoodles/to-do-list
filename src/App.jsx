import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // 添加任务
  const addTask = () => {
    setTasks([...tasks, { id: Date.now(), text: newTask }]);
    setNewTask('');
  };

  // 删除任务
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // 编辑任务
  const editTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  };

  // 过滤任务
  const filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      
      <input 
        type="text" 
        placeholder="Search tasks..." 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => editTask(task.id, prompt('Edit task', task.text))}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
