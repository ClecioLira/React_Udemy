import { useState } from "react";

const ManageData = () => {
  let someData = 10;
  const mudar = () => {
    someData = 15;
  };

  let [number, setNumber] = useState(100);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={mudar}>Mudar variavel</button>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber((number = number + 200))}>
          Mudar o state
        </button>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default ManageData;
