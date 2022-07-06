import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// import logo from './logo.svg';
import './App.css';

// const dafaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de intro a React', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
//   {text: 'La cuarta Tarea', completed: false},
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}

export default App;
