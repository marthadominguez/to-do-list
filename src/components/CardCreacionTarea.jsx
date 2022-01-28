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
      <h2 className={`text-4xl font-bold text-${colorMode}-300 mb-6 leading-9`}>
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
          className={`my-2 text-white ${
            newTodo === "" ? "button-disabled" : "button"
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
