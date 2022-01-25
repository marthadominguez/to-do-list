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
  const [ todos, setTodos ] = useState(todosDefault)
  const todosCompletados = todos.filter(todo => todo.completed ).length;
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

  return (
    <div className="App flex justify-center h-screen items-center">
      <div className="bg-indigo-400 p-12 flex flex-col">
        <h2 className="text-3xl">Crea una nueva tarea</h2>
        <span className="">Nombre de la tarea:</span>
        <input className="" placeholder="Conquistar el mundo..."></input>
        <button type="button" onClick={ console.log() } >Crear tarea</button>
      </div>
      <div className="bg-emerald-500 p-12 flex flex-col" >
        <h2 className="text-3xl" >Tus tareas </h2>
        <span>Has completado {todosCompletados} de {todosTotal} tareas.</span>
        <TodoSearch busqueda={busqueda} setBusqueda={setBusqueda} ></TodoSearch>
        <TodoList>{todosBuscados.map((todo, index) => <TodoItem key={index} text={todo.text}></TodoItem>)}</TodoList>
      </div>
    </div>
  );
}

export default App;
