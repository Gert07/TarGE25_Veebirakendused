import { useState } from 'react'
import './App.css'
import ToDoItem from './ToDoItem'

type ToDo = {
  id: number
  text: string
  completed: boolean
};

const App: React.FC = () => {
  const [todos, setToDos] = useState<ToDo[]>([]);
  const [newToDo, setNewToDo] = useState('');

  const addToDo = () => {
    if (!newToDo.trim()) return;
    setToDos([...todos, { id: Date.now(), text: newToDo.trim(), completed: false}]); 
    setNewToDo(''); 
  };
  const toggleTodo = (id: number) => {
    setToDos(todos.map(toDo =>
      toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
    ));
  };

  const deleteTodo = (id: number) => {
    setToDos(todos.filter(toDo => toDo.id !== id));
  };


//function App() {
  

  return (
    <div className="app">
      <h1>To-Do List</h1>
      {/* {Todo list UI goes here} */}
      <div className='input-row'>
        <input type="text" 
        value={newToDo}
        onChange={e => setNewToDo(e.target.value)}
        placeholder='Add a new task'
        onKeyDown={e => e.key === 'Enter' && addToDo()} />
        <button onClick={addToDo}>Add</button>
      </div>
      <ul className='todo-list'>
        {todos.map(toDo => (
          <ToDoItem
            key={toDo.id}
            toDo={toDo}
              toggleToDo={toggleTodo}
              deleteToDo={deleteTodo}
              />
        ))}
      </ul>
    </div> 
  )
}

export default App
