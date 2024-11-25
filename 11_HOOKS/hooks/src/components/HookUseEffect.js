import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  // useEffect sem dependencias
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const mudaNumero = () => {
    setNumber(number + 1);
  };

  const [number, setNumber] = useState(1);

  // useEffect array de dependencias vazio
  useEffect(() => {
    console.log("serei executado apenas uma vez");
  }, []);

  // item no array de dependencias
  const [outroNumero, setOutroNumero] = useState(0);
  useEffect(() => {
    if (outroNumero > 0) console.log("serei executado quando o numero for mudado");
  }, [outroNumero]);

  return (
    <div>
      <h2>HookUseEffect</h2>
      <p>Numero: {number}</p>
      <button onClick={mudaNumero}>Mudar</button>

      <p>Outro numero: {outroNumero}</p>
      <button onClick={() => setOutroNumero(outroNumero + 1)}>Mudar</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
