import React, { useState } from "react";

export const TodoSearch = ({busqueda, setBusqueda}) => {
  const onSearch = (event) => {
    setBusqueda(event.target.value);
  };

  return (
    <div>
      <input className="my-2 search" onChange={onSearch} value={busqueda} placeholder="Buscar..."></input>
    </div>
  );
};
