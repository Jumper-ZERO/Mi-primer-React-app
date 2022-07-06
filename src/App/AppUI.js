import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';

function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchTodos,
  completeTodo,
  deleteTodo,
}) {
    return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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

      <CreateTodoButton />
      
    </React.Fragment>
    );
}

export { AppUI };