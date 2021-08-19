import React from 'react';

export const Formulario = () => {
  return (
    <form>
      <h2>Agrega tus gastos aquí</h2>
      <div className="campo">
        <label>Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
        />
      </div>
      <div className="campo">
        <label>Cantidad del gasto</label>
        <input type="number" className="u-full-width" placeholder="Ej. 300" />
      </div>

      <input
        type="submit"
        value="Agregar gasto"
        className="button-primary u-full-width"
      />
    </form>
  );
};
