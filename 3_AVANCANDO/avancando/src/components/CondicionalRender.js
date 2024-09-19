import { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState("João");
  
  return (
    <div>
      <h1>Será exibido?</h1>
      {x && <p>X é true</p>}
      {!x && <p>X é false</p>}

      <h1>If ternário ?</h1>
      {name === "João" ? (
        <div>
          <p>O nome é joão</p>
        </div>
      ) : (
        <div>
          <p>O nome não é joão</p>
        </div>
      )}
      <button onClick={() => setName("Matheus")}>Clica aqui</button>
    </div>
  );
};

export default CondicionalRender;
