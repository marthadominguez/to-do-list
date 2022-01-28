import React, { useState } from "react";
import { TodoSearch } from './components/TodoSearch'
import { TodoItem } from './components/TodoItem';
import { Footer } from './components/Footer'
import useLocalStorage from "./customHooks/useLocalStorage";

function App() {

  const { item: todos, guardarItem: guardarTodos } = useLocalStorage("TODOS_V1", []);
  const [newTodo, setNewTodo] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [isCompleted, setIsCompleted] = useState(false)

  const todosCompletados = todos.filter(todo => todo.completed).length;
  const todosTotal = todos.length;

  let todosBuscados = [];

  // Si no hay búsqueda, devuelve la lista de todos los TODO's en el Local Storage
  // De lo contrario, filtra la lista de TODO's y retorna los que incluyen el texto buscado
  if (busqueda.length < 1) {
    todosBuscados = todos
  } else {
    todosBuscados = todos.filter(todo => {
      const todoTexto = todo.text.toLowerCase();
      const busquedaTexto = busqueda.toLowerCase();
      return todoTexto.includes(busquedaTexto);
    });
  }

  const crearTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false
    })
    guardarTodos(newTodos);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    crearTodo(newTodo);
    setNewTodo("")
  }

  const completarTodos = (texto) => {
    setIsCompleted(!isCompleted)
    const indexTodo = todos.findIndex(todo => todo.text === texto);
    const newTodos = [...todos];
    // newTodos[indexTodo] = {
    //   text: todos[indexTodo].text,
    //   completed: true
    // };
    newTodos[indexTodo].completed = isCompleted;
    guardarTodos(newTodos);
  }

  const eliminarTodos = (texto) => {
    const indexTodo = todos.findIndex(todo => todo.text === texto);
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    guardarTodos(newTodos);
  }

  const onChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div className="App bg-color h-screen relative">
      <div className="flex justify-center items-center h-full">
        <section className="bg-white p-6 m-4 flex flex-col w-1/4 h-4/6 rounded-2xl">
          <h2 className="text-4xl font-bold text-sky-300 mb-6 leading-9 ">Crea una nueva tarea</h2>
          <form onSubmit={onSubmit}>
            <label htmlFor="tarea" className="tracking-widest text-slate-400 text-xs">NOMBRE DE LA TAREA :</label>
            <input value={newTodo} name="tarea" id="tarea" onChange={onChange} className="my-2 input rounded-2xl" placeholder="Conquistar el mundo..."></input>
            <button className={`"my-2 text-white ${newTodo === "" ? "button-disabled" : "button"}`} type="submit" disabled={newTodo === "" ? true : false}>Crear</button>
          </form>
        </section>
        <section className=" m-4 flex flex-col w-1/4 h-4/6 rounded-2xl" >
          <div className="px-6 pt-6 pb-4 flex flex-col">
            <h2 className="text-4xl font-bold text-center text-sky-300" >Tus tareas </h2>
            <span className="my-2 text-center text-slate-500" >
              Has completado <b>{todosCompletados} de {todosTotal}</b>
              {todosTotal === 1 ? " tarea" : " tareas"}
            </span>
            <TodoSearch busqueda={busqueda} setBusqueda={setBusqueda} ></TodoSearch>
          </div>
          <ul className="overflow-auto px-6">
            {todosBuscados.map((todo, index) => (
              <TodoItem
                key={index}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completarTodos(todo.text)}
                onDelete={() => eliminarTodos(todo.text)}
              >
              </TodoItem>))}
          </ul>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
