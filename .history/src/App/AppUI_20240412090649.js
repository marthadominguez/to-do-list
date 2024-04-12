import React, { useState, useEffect } from "react";
import useLocalStorage from "../customHooks/useLocalStorage";
import { TodoSearch } from '../components/TodoSearch'
import { TodoItem } from '../components/TodoItem';
import { Footer } from '../components/Footer'
import { CardCreacionTarea } from '../components/CardCreacionTarea'
import { ColorButtons } from "../components/ColorButtons";
import { useColorMode } from '../context/ColorContext'

export const AppUI = () => {

    const { item: todos, guardarItem: guardarTodos } = useLocalStorage("TODOS_V1", []);
    const [busqueda, setBusqueda] = useState("");
    const { colorMode } = useColorMode();

    useEffect(() => {
    },[])

    const todosCompletados = todos.filter(todo => todo.completed).length;
    const todosTotal = todos.length;

    let todosBuscados = [];

    // Si no hay búsqueda, devuelve la lista de todos los TODO's en el Local Storage
    // De lo contrario, filtra la lista de TODO's y retorna los que incluyen el texto buscado
    if (busqueda.length < 1) {
        todosBuscados = todos;
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

    const completarTodos = (texto, completed) => {
        const indexTodo = todos.findIndex(todo => todo.text === texto);
        const newTodos = [...todos];
        newTodos[indexTodo].completed = !completed;
        guardarTodos(newTodos);
    }

    const eliminarTodos = (texto) => {
        const indexTodo = todos.findIndex(todo => todo.text === texto);
        const newTodos = [...todos];
        newTodos.splice(indexTodo, 1);
        guardarTodos(newTodos);
    }
    // {``}
    // {colorMode === "sky" ? ("") : (colorMode === "purple" ? ("") : (""))}  
    return (
        <div className={colorMode === "sky" ? ("App bg-sky-100 relative md:h-screen") : (colorMode === "purple" ? ("App bg-purple-100 h-auto relative md:h-screen ") : ("App bg-emerald-100 h-auto relative md:h-screen"))}>
            <div className="flex justify-center items-center flex-col h-full md:h-full md:flex-row">
                <CardCreacionTarea crearTodo={crearTodo}></CardCreacionTarea>
                <section className="m-4 flex flex-col w-10/12 h-96 mb-16 rounded-2xl md:w-96 md:h-4/6 md:mb-0">
                    <div className="pt-1 pb-4 flex flex-col px-4 md:px-6 md:pt-6">
                        <h2 className={colorMode === "sky" ? ("text-3xl font-semibold text-center text-sky-400 tracking-wider md:text-4xl") : (colorMode === "purple" ? ("text-3xl font-semibold text-center text-purple-400 tracking-wider md:text-4xl") : ("text-3xl font-semibold text-center text-emerald-400 tracking-wider md:text-4xl"))}>Tus tareas</h2>
                        <span className="my-2 text-center text-slate-500" >
                            Has completado <b>{todosCompletados} de {todosTotal}</b>
                            {todosTotal === 1 ? " tarea" : " tareas"}
                        </span>
                        <TodoSearch busqueda={busqueda} setBusqueda={setBusqueda} ></TodoSearch>
                    </div>
                    <ul className="overflow-auto px-4 md:px-6 sm:overflow-auto">
                        {todosBuscados.map((todo, index) => (
                            <TodoItem
                                key={index}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completarTodos(todo.text, todo.completed)}
                                onDelete={() => eliminarTodos(todo.text)}
                            >
                            </TodoItem>))}
                    </ul>
                    {todosTotal === 0 ? (<span className="my-5 text-center text-slate-500">
                        No hay tareas.
                    </span>):(<></>)}
                    {todosTotal !== 0 && todosBuscados.length === 0 ? (<span className="my-5 text-center text-slate-500">
                        No hay resultados.
                    </span>):(<></>)}
                </section>
            </div>
            <ColorButtons />
            <Footer />
        </div>
    );
};


