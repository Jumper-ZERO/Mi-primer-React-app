import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';

function AppUI() {

  const { 
    error, 
    loading, 
    searchTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

    return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
      {error && <p>Desesperate, hibo un error...</p>}
      {loading && <p>Estamos cargando, no desesperes...</p>}
      {(!loading && !searchTodos.length) && <p>Crea tu primer todo</p>}

      {searchTodos.map(todos => (
        <TodoItem 
        key={todos.text} 
        text_content={todos.text}
        completed={todos.completed}
        onComplete={() => completeTodo(todos.text)}
        onDelete={() => deleteTodo(todos.text)}
        />
      ) )}
    </TodoList>

    {!!openModal && (
      <Modal>
        <TodoForm />
      </Modal>
    )}

    <CreateTodoButton
      setOpenModal={setOpenModal}
      openModal={openModal}
    />
      
    </React.Fragment>
    );
}

export { AppUI };