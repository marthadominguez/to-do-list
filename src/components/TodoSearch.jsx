import React, { useState } from "react";

export const TodoSearch = ({busqueda, setBusqueda}) => {
  const onSearch = (event) => {
    setBusqueda(event.target.value);
  };

  return (
    <div>
      <input onChange={onSearch} value={busqueda} placeholder="Buscar..."></input>
    </div>
  );
};
