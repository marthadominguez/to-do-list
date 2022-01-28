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
    const [isCompleted, setIsCompleted] = useState();
    const { colorMode } = useColorMode();

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
        console.log("hiciste click")
    }

    const eliminarTodos = (texto) => {
        const indexTodo = todos.findIndex(todo => todo.text === texto);
        const newTodos = [...todos];
        newTodos.splice(indexTodo, 1);
        guardarTodos(newTodos);
    }
    // {``}  
    return (
        <div className={ colorMode === "sky" ? ("App bg-sky-100 h-screen relative") : (colorMode === "purple" ? ("App bg-purple-100 h-screen relative") : ("App bg-emerald-100 h-screen relative"))}>
            <div className="flex justify-center items-center h-full">
                <CardCreacionTarea crearTodo={crearTodo}></CardCreacionTarea>
                <section className=" m-4 flex flex-col w-1/4 h-4/6 rounded-2xl">
                    <div className="px-6 pt-6 pb-4 flex flex-col">
                        <h2 className={`text-4xl font-bold text-center text-${colorMode}-300`}>Tus tareas </h2>
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
            <ColorButtons/>
            <Footer/>
        </div>
    );
};


