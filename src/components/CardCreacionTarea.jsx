import React, { useState } from "react";
import { useColorMode } from '../context/ColorContext';

export const CardCreacionTarea = ({crearTodo}) => {
    const [newTodo, setNewTodo] = useState("");
    const { colorMode } = useColorMode();    

    const onSubmit = (event) => {
        event.preventDefault();
        crearTodo(newTodo);
        setNewTodo("")
    }

    const onChange = (event) => {
        setNewTodo(event.target.value);
    };
 
  return (
    <section className="bg-white p-6 m-4 flex flex-col w-1/4 h-4/6 rounded-2xl">
      <h2 className={colorMode === "sky" ? ("text-4xl font-bold text-sky-300 mb-6 leading-9") : (colorMode === "purple" ? ("text-4xl font-bold text-purple-300 mb-6 leading-9") : ("text-4xl font-bold text-emerald-300 mb-6 leading-9"))} >
        Crea una nueva tarea
      </h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="tarea" className="tracking-widest text-slate-400 text-xs"> NOMBRE DE LA TAREA :</label>
        <input
          value={newTodo}
          name="tarea"
          id="tarea"
          onChange={onChange}
          className="my-2 input rounded-2xl"
          placeholder="Conquistar el mundo..."
        ></input>
        <button
          className={
            `my-2 text-white ${
            newTodo === "" ? (`button-disabled ${colorMode === "sky" ? ("bg-sky-500") : (colorMode === "purple" ? ("bg-purple-500") : ("bg-emerald-500"))}`) : (`button ${colorMode === "sky" ? ("bg-sky-500 active:bg-sky-600") : (colorMode === "purple" ? ("bg-purple-500 active:bg-purple-600") : ("bg-emerald-500 active:bg-emerald-600"))}`)
          }`}
          type="submit"
          disabled={newTodo === "" ? true : false}
        >
          Crear
        </button>
      </form>
    </section>
  );
};
