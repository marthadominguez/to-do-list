import React from "react";

export const TodoSearch = ({busqueda, setBusqueda}) => {
  const onSearch = (event) => {
    setBusqueda(event.target.value);
  };

  return (
    <div>
      <input className="my-2 text-slate-600 search" onChange={onSearch} value={busqueda} placeholder="Buscar..."></input>
    </div>
  );
};
