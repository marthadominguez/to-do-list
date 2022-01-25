import React, { useState } from "react";
import { TodoSearch } from './components/TodoSearch'
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';

function App() {

  const todosDefault = [
    { text: "Mercar", completed: false },
    { text: "Comprar verduras", completed: true },
    { text: "Hacer aseo", completed: true }
  ]

  const [busqueda, setBusqueda] = useState("");
  const [todos, setTodos] = useState(todosDefault)
  const todosCompletados = todos.filter(todo => todo.completed).length;
  const todosTotal = todos.length;

  let todosBuscados = [];
  if (busqueda.length < 1) {
    todosBuscados = todos
  } else {
    todosBuscados = todos.filter(todo => {
      const todoTexto = todo.text.toLowerCase();
      const busquedaTexto = busqueda.toLowerCase();
      return todoTexto.includes(busquedaTexto);
    });
  }

  console.log(todos)

  const completarTodos = (texto) => {
    const indexTodo = todos.findIndex(todo => todo.text === texto);
    const newTodos = [...todos];
    newTodos[indexTodo] = {
      text: todos[indexTodo].text,
      completed: true
    };
    setTodos(newTodos);
  }

return (
  <div className="App flex justify-center h-screen items-center">
    <div className="bg-lime-200 p-12 flex flex-col w-1/3 h-96">
      <h2 className="text-3xl">Crea una nueva tarea</h2>
      <span className="my-4">Nombre de la tarea:</span>
      <input className="my-4" placeholder="Conquistar el mundo..."></input>
      <button className="my-4" type="button" onClick={console.log()} >Crear tarea</button>
    </div>
    <div className="bg-emerald-200 p-12 flex flex-col w-1/3 h-96" >
      <h2 className="text-3xl" >Tus tareas </h2>
      <span className="my-4" >Has completado {todosCompletados} de {todosTotal} tareas.</span>
      <TodoSearch busqueda={busqueda} setBusqueda={setBusqueda} ></TodoSearch>
      <TodoList>
        {todosBuscados.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completarTodos(todo.text) }>
          </TodoItem>))}
      </TodoList>
    </div>
  </div>
);
}

export default App;
