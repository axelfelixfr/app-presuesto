import React, { useState } from 'react';
import { Error } from './Error';

const Pregunta = ({ setPresupuesto, setRestante, setPregunta }) => {
  // State para el presupuesto
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  // Función que lee el presupuesto
  const definirPresupuesto = e => {
    setCantidad(parseInt(e.target.value, 10));
  };

  // Envio del presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();
    // Validar
    // Valida si la cantidad es menor a 1, y si no es un número con "isNan"
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    // Si se pasa la validación y hubo error se ocultará
    setError(false);

    setPresupuesto(cantidad);
    setRestante(cantidad);
    // Se pasará a false una vez haya enviado el formulario del presupuesto a evaluar
    setPregunta(false);
  };
  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error && <Error mensaje="El presupuesto es incorrecto" />}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          value={cantidad}
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </>
  );
};

export default Pregunta;
