import './App.css'
import { CreateToDo } from './Components/CreateToDO'
import { Todos } from './Components/Todos'
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/todo')
      .then(response => {
        setTodos(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []);
  
  return (
      <div>
              <CreateToDo />
              <Todos todos={todos} />
      </div>
  )
}

export default App
